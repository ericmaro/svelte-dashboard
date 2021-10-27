<template lang="jsx">
<div>
    <MasterTable 
    v-if="permissionConnection" 
    :searchColumns = "['name']"
    :columns="dataColumns" 
    :data="permissionConnection?.edges"
    :pageInfo ="permissionConnection?.pageInfo"
    :loading ="loading"
    @onNavigate = "onNavigate"
    @onSearch = "onSearch"
    />   
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef, onMounted } from "vue";
import { PermissionConnection } from "@/views/pages/permissions/types/permissionConnection";
import MasterTable from "@/components/master-table/Main.vue";
import MasterForm from "@/components/master-form/Main.vue";
import SideModal from "@/components/side-modal/Main.vue";
import { dataColumns } from "./table";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    MasterTable,
    SideModal,
    MasterForm,
  },
  setup() {
    const store = useStore();
    const errors = computed(() => store.state.permissions.errors);
    const loading = computed(() => store.state.permissions.loading);

    onMounted(() => {
      store.dispatch("permissions/getPermissionAction");
    });

    const permissionConnection: ComputedRef<PermissionConnection> = computed(
      () => store.state.permissions.permissionConnection
    );

    const onNavigate = (paging: any) => {
      store.dispatch("permissions/getPermissionAction", {
        paging: paging,
      });
    };

    const onSearch = (filter: any) => {
      store.dispatch("permissions/getPermissionAction", {
        filter: filter,
      });
    };

    return {
      permissionConnection,
      dataColumns,
      onSearch,
      errors,
      loading,
      onNavigate,
    };
  },
});
</script>
