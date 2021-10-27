<template lang="jsx">
<div>
    <MasterTable 
    v-if="matchConnection" 
    :columns="dataColumns" 
    :data="matchConnection?.edges"
    :editAction="false"
    :viewAction="false"
    :deleteAction="false"  
    :newAction ="false"
    :moreAction ="false"
    :moreMenuItems ="moreMenu"
    :pageInfo ="matchConnection?.pageInfo"
    :loading ="loading"
    @onNavigate = "onNavigate"
    @onSearch = "onSearch"
    @onMore = "onMore"
    newButtonText = "Add Match"
    />   
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef, onMounted, ref } from "vue";
import { MatchConnection } from "@/views/pages/matches/types/matchConnection";
import MasterTable from "@/components/master-table/Main.vue";
import MasterForm from "@/components/master-form/Main.vue";
import SideModal from "@/components/side-modal/Main.vue";
import { dataColumns } from "./table";
import { useStore } from "vuex";
import { Match } from "./types/match";
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
    const selectedMatch = ref(null as Match | null);
    const errors = computed(() => store.state.matches.errors);
    const loading = computed(() => store.state.matches.loading);

    onMounted(() => {
      store.dispatch("matches/getMatchAction");
    });

    const matchConnection: ComputedRef<MatchConnection> = computed(
      () => store.state.matches.matchConnection
    );
    const onShow = () => {
      show.value = true;
    };

    const onNavigate = (paging: any) => {
      store.dispatch("matches/getMatchAction", {
        paging: paging,
      });
    };

    const onMore = (values: { item: MenuItem; node: Match }) => {
      console.log(values);
    };

    const onSearch = (filter: any) => {
      store.dispatch("matches/getMatchAction", {
        filter: filter,
      });
    };

    return {
      matchConnection,
      dataColumns,
      onSearch,
      formModal,
      editMode,
      selectedMatch,
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
