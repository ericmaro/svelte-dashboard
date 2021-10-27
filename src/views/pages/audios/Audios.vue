<template lang="jsx">
<div>
    <side-modal 
    :visible="formModal"
    size="lg"
    @onClosed="onFormModalClose"
    :title="editMode?'Edit Audio':'Create new Audio'">
     <div
        v-for="(error, i) in errors"
        :key="i"
        class="alert alert-danger-soft mt-5 show flex items-center mb-2"
        audio="alert"
      >
        <AlertOctagonIcon class="w-6 h-6 mr-2" /> {{ error.message }}
      </div>
      <master-form v-if="formModal&&!editMode" :showConfirm="false" :loading="loading" @onSubmit="onCreate" :form="createAudio"></master-form>
      <master-form v-if="editMode" :showConfirm="true"  :loading="loading" @onSubmit="onUpdate" :form="editForm"></master-form>
    </side-modal>
    <MasterTable 
    v-if="audioConnection" 
    :columns="dataColumns" 
    :data="audioConnection?.edges"
    :editAction="true"
    :viewAction="true"
    :deleteAction="true"  
    :newAction ="true"
    :moreAction ="false"
    :moreMenuItems ="moreMenu"
    :searchColumns = "['name', 'code']"
    :pageInfo ="audioConnection?.pageInfo"
    :loading ="loading"
    @onNavigate = "onNavigate"
    @onSearch = "onSearch"
    @onNew = "showFormModal"
    @onEdit = "showEditForm"
    @onMore = "onMore"
    @onView = "onView"
    newButtonText = "Add Audio"
    />   
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef, onMounted, ref } from "vue";
import { AudioConnection } from "@/views/pages/audios/types/audioConnection";
import MasterTable from "@/components/master-table/Main.vue";
import MasterForm from "@/components/master-form/Main.vue";
import SideModal from "@/components/side-modal/Main.vue";
import { dataColumns } from "./table";
import { useStore } from "vuex";
import { createAudio } from "./forms/create";
import { editAudio } from "./forms/edit";
import { Audio } from "./types/audio";
import { CreateOneAudioInput } from "./types/createOneAudioInput";
import { CreateAudioInput } from "./types/createAudioInput";
import { UpdateOneAudioInput } from "./types/updateOneAudioInput";
import { MenuItem } from "../../../shared/types/menuItem";
import { useRouter } from "vue-router";
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
    const router = useRouter();
    const editForm = ref(editAudio);
    const selectedAudio = ref(null as Audio | null);
    const errors = computed(() => store.state.audios.errors);
    const loading = computed(() => store.state.audios.loading);
    const resetErrors = () => store.dispatch("audios/resetErrorsStateAction");

    onMounted(() => {
      store.dispatch("audios/getAudioAction");
    });

    const audioConnection: ComputedRef<AudioConnection> = computed(
      () => store.state.audios.audioConnection
    );
    const showEditForm = (value: any) => {
      resetErrors();
      editMode.value = true;
      selectedAudio.value = value;
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
    const onUpdate = (values: CreateAudioInput) => {
      if (selectedAudio.value !== null) {
        const data: UpdateOneAudioInput = {
          update: values,
          id: selectedAudio.value.id,
        };
        store.dispatch("audios/updateOneAudioAction", data);
      }
    };
    const onCreate = (values: CreateAudioInput) => {
      const data: CreateOneAudioInput = { audio: values };
      store.dispatch("audios/createOneAudioAction", data);
    };
    const onShow = () => {
      show.value = true;
    };

    const onView = (node: Audio) => {
      router.push(`/audios/match/${node.id}`);
    };

    const onNavigate = (paging: any) => {
      store.dispatch("audios/getAudioAction", {
        paging: paging,
      });
    };

    const onMore = (values: { item: MenuItem; node: Audio }) => {
      console.log(values);
    };

    const onSearch = (filter: any) => {
      store.dispatch("audios/getAudioAction", {
        filter: filter,
      });
    };

    return {
      audioConnection,
      dataColumns,
      onSearch,
      showFormModal,
      formModal,
      onFormModalClose,
      createAudio,
      onUpdate,
      onCreate,
      editMode,
      onView,
      showEditForm,
      editForm,
      selectedAudio,
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
