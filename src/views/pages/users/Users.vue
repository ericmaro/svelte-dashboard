<template lang="jsx">
<div>
    <side-modal 
    :visible="formModal"
    size="lg"
    @onClosed="onFormModalClose"
    :title="editMode?'Edit User':'Create new User'">
     <div
        v-for="(error, i) in errors"
        :key="i"
        class="alert alert-danger-soft mt-5 show flex items-center mb-2"
        role="alert"
      >
        <AlertOctagonIcon class="w-6 h-6 mr-2" /> {{ error.message }}
      </div>
      <master-form v-if="formModal&&!editMode" :showConfirm="false" :loading="loading" @onSubmit="onCreate" :form="createForm"></master-form>
      <master-form v-if="editMode" :showConfirm="true"  :loading="loading" @onSubmit="onUpdate" :form="editForm"></master-form>
    </side-modal>
    <simple-modal :isOpen="updatePasswordFormModal" @onClosed="onCloseUpdatePasswordModal">
       <div
        v-for="(error, i) in errors"
        :key="i"
        class="alert alert-danger-soft mt- show flex items-center mb-2"
        role="alert"
      >
        <AlertOctagonIcon class="w-6 h-6 mr-2" /> {{ error.message }}
      </div>
      <master-form :showConfirm="false" :loading="loading" @onSubmit="onChangePassword" :form="updatePasswordForm"></master-form>
    </simple-modal>
    <MasterTable 
    v-if="userConnection" 
    :columns="dataColumns" 
    :data="userConnection?.edges"
    :pageInfo ="userConnection?.pageInfo"
    :editAction="true"
    :viewAction="true"
    :deleteAction="true"  
    :newAction ="true"
    :moreAction ="true"
    :moreMenuItems ="moreMenu"
    :loading ="loading"
    :searchColumns = "['firstName', 'lastName', 'phone', 'email']"
    @onSearch = "onSearch"
    @onNew = "showFormModal"
    @onEdit = "showEditForm"
    @onView = "showProfile"
    @onMore = "onMore"
    @onNavigate = "onNavigate"
    newButtonText = "Add User"
    />   
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ComputedRef,
  onMounted,
  ref,
  watch,
  watchEffect,
} from "vue";
import { useRouter } from "vue-router";
import { UserConnection } from "@/views/pages/users/types/userConnection";
import MasterTable from "@/components/master-table/Main.vue";
import MasterForm from "@/components/master-form/Main.vue";
import SideModal from "@/components/side-modal/Main.vue";
import SimpleModal from "@/components/simple-modal/Main.vue";
import { dataColumns } from "./table";
import { useStore } from "vuex";
import { createUser } from "./forms/create";
import { editUser } from "./forms/edit";
import { updatePasswordForm } from "./forms/updatePassword";
import { User } from "./types/user";
import { CreateOneUserInput } from "./types/createOneUserInput";
import { CreateUserInput } from "./types/createUserInput";
import { UpdateOneUserInput } from "./types/updateOneUserInput";
import { MenuItem } from "../../../shared/types/menuItem";
import { UserUpdatePasswordInput } from "./types/userUpdatePasswordInput";
import { RoleEdge } from "../roles/types/roleEdge";
import { OrganizationEdge } from "../organizations/types/organizationEdge";
import { UserFilter } from "./types/userFilter";
export default defineComponent({
  components: {
    MasterTable,
    SideModal,
    MasterForm,
    SimpleModal,
  },
  setup() {
    const router = useRouter();
    const formModal = ref(false);
    const updatePasswordFormModal = ref(false);
    const editMode = ref(false);
    const show = ref(false);
    const store = useStore();
    const editForm = ref(editUser);
    const createForm = ref(createUser);
    const selectedUser = ref(null as User | null);
    const errors = computed(() => store.state.users.errors);
    const loading = computed(() => store.state.users.loading);
    const passwordChanged = computed(() => store.state.users.passwordChanged);
    const resetErrors = () => store.dispatch("users/resetErrorsStateAction");
    const moreMenu: MenuItem[] = [
      { title: "Change password", name: "password" },
    ];

    const showProfile = (payload: User) => {
      store.commit("users/setActiveViewProfile", payload);
      router.push({
        name: "profile",
        params: { email: payload.email },
      });
    };
    const user: ComputedRef<User> = computed(
      () => store.state.users.loggedInUser
    );

    onMounted(() => {
      store.dispatch("users/getLoggedInUserAction");
      getUsers();
      store.dispatch("organizations/getOrganizationAction");
      store.dispatch("roles/getRoleAction");
    });

    watch(passwordChanged, (val) => {
      if (val && updatePasswordFormModal.value) {
        onCloseUpdatePasswordModal();
      }
    });

    const getDefaultFilter = (user: User) => {
      if (user?.role?.name === "ADMIN") return {} as UserFilter;
      return {
        organizationId: user?.organization ? user.organization.id : null,
      } as UserFilter;
    };

    const getUsers = () => {
      const defaultFilter = getDefaultFilter(user?.value);
      store.dispatch("users/getUserAction", {
        filter: defaultFilter,
      });
    };

    watchEffect(() => {
      createForm.value.groups.forEach((group) => {
        group.fields.forEach((field) => {
          if (field.name === "roleId") {
            field.options = store.state.roles.roleConnection?.edges?.map(
              (edge: RoleEdge) => {
                return {
                  label: edge.node.name,
                  value: edge.node.id,
                } as { label: string; value: any };
              }
            );
          }
          if (field.name === "organizationId") {
            field.options = store.state.organizations.organizationConnection?.edges?.map(
              (edge: OrganizationEdge) => {
                return {
                  label: edge.node.name,
                  value: edge.node.id,
                } as { label: string; value: any };
              }
            );
          }
        });
      });

      editForm.value.groups.forEach((group) => {
        group.fields.forEach((field) => {
          if (field.name === "roleId") {
            field.options = store.state.roles.roleConnection?.edges?.map(
              (edge: RoleEdge) => {
                return {
                  label: edge.node.name,
                  value: edge.node.id,
                } as { label: string; value: any };
              }
            );
          }
          if (field.name === "organizationId") {
            field.options = store.state.organizations.organizationConnection?.edges?.map(
              (edge: OrganizationEdge) => {
                return {
                  label: edge.node.name,
                  value: edge.node.id,
                } as { label: string; value: any };
              }
            );
          }
        });
      });
    });

    const userConnection: ComputedRef<UserConnection> = computed(
      () => store.state.users.userConnection
    );

    const onNavigate = (paging: any) => {
      store.dispatch("users/getUserAction", {
        paging: paging,
      });
    };

    const showEditForm = (value: any) => {
      resetErrors();
      editMode.value = true;
      selectedUser.value = value;
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
    const onUpdate = (values: CreateUserInput) => {
      if (selectedUser.value !== null) {
        const data: UpdateOneUserInput = {
          update: values,
          id: selectedUser.value.id,
        };
        store.dispatch("users/updateOneUserAction", data);
      }
    };
    const onCreate = (values: CreateUserInput) => {
      const data: CreateOneUserInput = { user: values };
      store.dispatch("users/createOneUserAction", data);
    };
    const onShow = () => {
      show.value = true;
    };

    const onMore = (values: { item: MenuItem; node: User }) => {
      console.log(values);
      if (values.item.name === "password") {
        //show change password modal
        resetErrors();
        selectedUser.value = values.node;
        updatePasswordFormModal.value = true;
      }
    };

    const onChangePassword = (values: UserUpdatePasswordInput) => {
      if (selectedUser.value) {
        store.dispatch("users/updateUserPasswordAction", {
          input: values,
          id: selectedUser.value.id,
        });
      }
    };
    const onCloseUpdatePasswordModal = () => {
      updatePasswordFormModal.value = false;
      selectedUser.value = null;
      store.dispatch("users/resetPasswordChangedStateAction", false);
    };

    const onSearch = (filter: any) => {
      const defaultFilter = getDefaultFilter(user.value);
      const userFilter = {
        ...filter,
        defaultFilter,
      };
      store.dispatch("users/getUserAction", {
        filter: userFilter,
      });
    };

    return {
      userConnection,
      dataColumns,
      onSearch,
      showProfile,
      showFormModal,
      formModal,
      onFormModalClose,
      createForm,
      onUpdate,
      onCreate,
      editMode,
      showEditForm,
      editForm,
      selectedUser,
      errors,
      loading,
      show,
      onShow,
      moreMenu,
      onMore,
      onChangePassword,
      updatePasswordFormModal,
      updatePasswordForm,
      onCloseUpdatePasswordModal,
      onNavigate,
    };
  },
});
</script>
