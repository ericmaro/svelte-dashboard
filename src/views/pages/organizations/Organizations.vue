<template lang="jsx">
<div>
    <side-modal 
    :visible="formModal"
    size="lg"
    @onClosed="onFormModalClose"
    :title="editMode?'Edit Organization':'Create new Organization'">
     <div
        v-for="(error, i) in errors"
        :key="i"
        class="alert alert-danger-soft mt-5 show flex items-center mb-2"
        organization="alert"
      >
        <AlertOctagonIcon class="w-6 h-6 mr-2" /> {{ error.message }}
      </div>
      <master-form v-if="formModal&&!editMode" :showConfirm="false" :loading="loading" @onSubmit="onCreate" :form="createOrganization"></master-form>
      <master-form v-if="editMode" :showConfirm="true"  :loading="loading" @onSubmit="onUpdate" :form="editForm"></master-form>
    </side-modal>
    <MasterTable 
    v-if="organizationConnection" 
    :columns="dataColumns" 
    :data="organizationConnection?.edges"
    :editAction="true"
    :viewAction="true"
    :deleteAction="true"  
    :newAction ="true"
    :moreAction ="true"
    :moreMenuItems ="moreMenu"
    :searchColumns = "['name', 'type']"
    :pageInfo ="organizationConnection?.pageInfo"
    :loading ="loading"
    @onNavigate = "onNavigate"
    @onSearch = "onSearch"
    @onNew = "showFormModal"
    @onEdit = "showEditForm"
    @onMore = "onMore"
    newButtonText = "Add Organization"
    />   
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef, onMounted, ref } from "vue";
import { OrganizationConnection } from "@/views/pages/organizations/types/organizationConnection";
import MasterTable from "@/components/master-table/Main.vue";
import MasterForm from "@/components/master-form/Main.vue";
import SideModal from "@/components/side-modal/Main.vue";
import { dataColumns } from "./table";
import { useStore } from "vuex";
import { createOrganization } from "./forms/create";
import { editOrganization } from "./forms/edit";
import { Organization } from "./types/organization";
import { CreateOneOrganizationInput } from "./types/createOneOrganizationInput";
import { CreateOrganizationInput } from "./types/createOrganizationInput";
import { UpdateOneOrganizationInput } from "./types/updateOneOrganizationInput";
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
    const editForm = ref(editOrganization);
    const selectedOrganization = ref(null as Organization | null);
    const errors = computed(() => store.state.organizations.errors);
    const loading = computed(() => store.state.organizations.loading);
    const resetErrors = () =>
      store.dispatch("organizations/resetErrorsStateAction");

    onMounted(() => {
      store.dispatch("organizations/getOrganizationAction");
    });

    const organizationConnection: ComputedRef<OrganizationConnection> = computed(
      () => store.state.organizations.organizationConnection
    );

    const showEditForm = (value: any) => {
      resetErrors();
      editMode.value = true;
      selectedOrganization.value = value;
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
    const onUpdate = (values: CreateOrganizationInput) => {
      if (selectedOrganization.value !== null) {
        const data: UpdateOneOrganizationInput = {
          update: values,
          id: selectedOrganization.value.id,
        };
        store.dispatch("organizations/updateOneOrganizationAction", data);
      }
    };
    const onCreate = (values: CreateOrganizationInput) => {
      const data: CreateOneOrganizationInput = { organization: values };
      store.dispatch("organizations/createOneOrganizationAction", data);
    };
    const onShow = () => {
      show.value = true;
    };

    const onMore = (values: { item: MenuItem; node: Organization }) => {
      console.log(values);
    };

    const onSearch = (filter: any) => {
      store.dispatch("organizations/getOrganizationAction", {
        filter: filter,
      });
    };

    const onNavigate = (paging: any) => {
      store.dispatch("organizations/getOrganizationAction", {
        paging: paging,
      });
    };

    return {
      organizationConnection,
      dataColumns,
      onSearch,
      showFormModal,
      formModal,
      onFormModalClose,
      createOrganization,
      onUpdate,
      onCreate,
      editMode,
      showEditForm,
      editForm,
      selectedOrganization,
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
