<template lang="jsx">
<div>
    <side-modal 
    :visible="formModal"
    size="lg"
    @onClosed="onFormModalClose"
    :title="editMode?'Edit Station':'Create new Station'">
     <div
        v-for="(error, i) in errors"
        :key="i"
        class="alert alert-danger-soft mt-5 show flex items-center mb-2"
        station="alert"
      >
        <AlertOctagonIcon class="w-6 h-6 mr-2" /> {{ error.message }}
      </div>
      <master-form v-if="formModal&&!editMode" :showConfirm="false" :loading="loading" @onSubmit="onCreate" :form="createStation"></master-form>
      <master-form v-if="editMode" :showConfirm="true"  :loading="loading" @onSubmit="onUpdate" :form="editForm"></master-form>
    </side-modal>
    <MasterTable 
    v-if="stationConnection" 
    :columns="dataColumns" 
    :data="stationConnection?.edges"
    :editAction="true"
    :viewAction="true"
    :deleteAction="true"  
    :newAction ="true"
    :moreAction ="true"
    :moreMenuItems ="moreMenu"
    :searchColumns = "['name', 'code']"
    :pageInfo ="stationConnection?.pageInfo"
    :loading ="loading"
    @onNavigate = "onNavigate"
    @onSearch = "onSearch"
    @onNew = "showFormModal"
    @onEdit = "showEditForm"
    @onMore = "onMore"
    newButtonText = "Add Station"
    />   
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef, onMounted, ref } from "vue";
import { StationConnection } from "@/views/pages/stations/types/stationConnection";
import MasterTable from "@/components/master-table/Main.vue";
import MasterForm from "@/components/master-form/Main.vue";
import SideModal from "@/components/side-modal/Main.vue";
import { dataColumns } from "./table";
import { useStore } from "vuex";
import { createStation } from "./forms/create";
import { editStation } from "./forms/edit";
import { Station } from "./types/station";
import { CreateOneStationInput } from "./types/createOneStationInput";
import { CreateStationInput } from "./types/createStationInput";
import { UpdateOneStationInput } from "./types/updateOneStationInput";
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
    const editForm = ref(editStation);
    const selectedStation = ref(null as Station | null);
    const errors = computed(() => store.state.stations.errors);
    const loading = computed(() => store.state.stations.loading);
    const resetErrors = () => store.dispatch("stations/resetErrorsStateAction");

    onMounted(() => {
      store.dispatch("stations/getStationAction");
    });

    const stationConnection: ComputedRef<StationConnection> = computed(
      () => store.state.stations.stationConnection
    );
    const showEditForm = (value: any) => {
      resetErrors();
      editMode.value = true;
      selectedStation.value = value;
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
    const onUpdate = (values: CreateStationInput) => {
      if (selectedStation.value !== null) {
        const data: UpdateOneStationInput = {
          update: values,
          id: selectedStation.value.id,
        };
        store.dispatch("stations/updateOneStationAction", data);
      }
    };
    const onCreate = (values: CreateStationInput) => {
      const data: CreateOneStationInput = { station: values };
      store.dispatch("stations/createOneStationAction", data);
    };
    const onShow = () => {
      show.value = true;
    };

    const onNavigate = (paging: any) => {
      store.dispatch("stations/getStationAction", {
        paging: paging,
      });
    };

    const onMore = (values: { item: MenuItem; node: Station }) => {
      console.log(values);
    };

    const onSearch = (filter: any) => {
      store.dispatch("stations/getStationAction", {
        filter: filter,
      });
    };

    return {
      stationConnection,
      dataColumns,
      onSearch,
      showFormModal,
      formModal,
      onFormModalClose,
      createStation,
      onUpdate,
      onCreate,
      editMode,
      showEditForm,
      editForm,
      selectedStation,
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
