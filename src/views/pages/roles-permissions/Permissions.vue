<template lang="jsx">
<div>
    <RolePermission 
    v-if="permissions && roleConnection" 
    :roles="roleConnection?.edges" 
    :permissions="permissions"
    @onCheck="onCheck"
    />   
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef, onMounted, ref } from "vue";
import { RoleConnection } from "@/views/pages/roles/types/roleConnection";
import RolePermission from "@/components/role-permission/Main.vue";
import { useStore } from "vuex";
import { Permission } from "./types/permission";
import { RelationsInput } from "@/shared/types/relationsInput";
import { Role } from "@/views/pages/roles/types/role";
export default defineComponent({
  components: {
    RolePermission,
  },
  setup() {
    const store = useStore();
    const selectedPermission = ref(null as Permission | null);
    const errors = computed(
      () => store.state.permissions.errors || store.state.roles.errors
    );
    const loading = computed(
      () => store.state.permissions.loading || store.state.roles.loading
    );

    onMounted(() => {
      store.dispatch("permissions/getPermissionAction");
      store.dispatch("roles/getRoleAction");
    });

    const permissions: ComputedRef<Permission[]> = computed(
      () => store.state.permissions.permissions
    );
    const onCheck = (value: {
      value: boolean;
      permission: Permission;
      role: Role;
    }) => {
      console.log(value.value);
      const data: RelationsInput = {
        id: value.role.id,
        relationIds: [value.permission.id],
      };
      if (value.value) {
        store.dispatch("roles/addPermissionsToRoleAction", data);
      } else {
        store.dispatch("roles/removePermissionsToRoleAction", data);
      }
    };

    const roleConnection: ComputedRef<RoleConnection> = computed(
      () => store.state.roles.roleConnection
    );

    const createSearchFilter = (searchString: string) => [
      { name: { iLike: `%${searchString}%` } },
    ];
    const onSearch = (value: string) => {
      console.log(createSearchFilter(value));
      store.dispatch("permissions/getPermissionAction", {
        filter: createSearchFilter(value),
      });
    };

    return {
      permissions,
      onSearch,
      roleConnection,
      selectedPermission,
      errors,
      loading,
      onCheck,
    };
  },
});
</script>
