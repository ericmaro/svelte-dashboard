<template lang="jsx">
<div>
    <side-modal 
    :visible="formModal"
    size="lg"
    @onClosed="onFormModalClose"
    :title="editMode?'Edit Role':'Create new Role'">
     <div
        v-for="(error, i) in errors"
        :key="i"
        class="alert alert-danger-soft mt-5 show flex items-center mb-2"
        role="alert"
      >
        <AlertOctagonIcon class="w-6 h-6 mr-2" /> {{ error.message }}
      </div>
      <master-form v-if="formModal&&!editMode" :showConfirm="false" :loading="loading" @onSubmit="onCreate" :form="createRole"></master-form>
      <master-form v-if="editMode" :showConfirm="true"  :loading="loading" @onSubmit="onUpdate" :form="editForm"></master-form>
    </side-modal>
    <MasterTable 
    v-if="roleConnection" 
    :columns="dataColumns" 
    :data="roleConnection?.edges"
    :editAction="true"
    :viewAction="true"
    :deleteAction="true"  
    :newAction ="true"
    :moreAction ="true"
    :moreMenuItems ="moreMenu"
    :searchColumns = "['name', 'code']"
    :pageInfo ="roleConnection?.pageInfo"
    :loading ="loading"
    @onNavigate = "onNavigate"
    @onSearch = "onSearch"
    @onNew = "showFormModal"
    @onEdit = "showEditForm"
    @onMore = "onMore"
    newButtonText = "Add Role"
    />   
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef, onMounted, ref } from "vue";
import { RoleConnection } from "@/views/pages/roles/types/roleConnection";
import MasterTable from "@/components/master-table/Main.vue";
import MasterForm from "@/components/master-form/Main.vue";
import SideModal from "@/components/side-modal/Main.vue";
import { dataColumns } from "./table";
import { useStore } from "vuex";
import { createRole } from "./forms/create";
import { editRole } from "./forms/edit";
import { Role } from "./types/role";
import { CreateOneRoleInput } from "./types/createOneRoleInput";
import { CreateRoleInput } from "./types/createRoleInput";
import { UpdateOneRoleInput } from "./types/updateOneRoleInput";
import { MenuItem } from "../../../shared/types/menuItem";
export default defineComponent({
  components: {
    MasterTable,
    SideModal,
    MasterForm,
  },
  setup() {
    const formModal = ref(false);
    const editMode = ref(false);
    const show = ref(false);
    const store = useStore();
    const editForm = ref(editRole);
    const selectedRole = ref(null as Role | null);
    const errors = computed(() => store.state.roles.errors);
    const loading = computed(() => store.state.roles.loading);
    const resetErrors = () => store.dispatch("roles/resetErrorsStateAction");

    onMounted(() => {
      store.dispatch("roles/getRoleAction");
    });

    const roleConnection: ComputedRef<RoleConnection> = computed(
      () => store.state.roles.roleConnection
    );
    const showEditForm = (value: any) => {
      resetErrors();
      editMode.value = true;
      selectedRole.value = value;
      showFormModal();
      editForm.value.groups.map((group) =>
        group.fields.map((field) => (field.value = value[field.name]))
      );
    };
    const showFormModal = () => {
      resetErrors();
      formModal.value = true;
    };

    const onFormModalClose = () => {
      console.log("close");
      show.value = false;
      formModal.value = false;
      editMode.value = false;
    };
    const onUpdate = (values: CreateRoleInput) => {
      if (selectedRole.value !== null) {
        const data: UpdateOneRoleInput = {
          update: values,
          id: selectedRole.value.id,
        };
        store.dispatch("roles/updateOneRoleAction", data);
      }
    };
    const onCreate = (values: CreateRoleInput) => {
      const data: CreateOneRoleInput = { role: values };
      store.dispatch("roles/createOneRoleAction", data);
    };
    const onShow = () => {
      show.value = true;
    };

    const onNavigate = (paging: any) => {
      store.dispatch("roles/getRoleAction", {
        paging: paging,
      });
    };

    const onMore = (values: { item: MenuItem; node: Role }) => {
      console.log(values);
    };

    const onSearch = (filter: any) => {
      store.dispatch("roles/getRoleAction", {
        filter: filter,
      });
    };

    return {
      roleConnection,
      dataColumns,
      onSearch,
      showFormModal,
      formModal,
      onFormModalClose,
      createRole,
      onUpdate,
      onCreate,
      editMode,
      showEditForm,
      editForm,
      selectedRole,
      errors,
      loading,
      show,
      onShow,
      onMore,
      onNavigate,
    };
  },
});
</script>
