<template lang="jsx">
    <side-modal 
    :visible="formModal"
    size="lg"
    @onClosed="onFormModalClose"
    :title="editMode?'Edit Association':'Create new Association'">
     <div
        v-for="(error, i) in errors"
        :key="i"
        class="alert alert-danger-soft mt-5 show flex items-center mb-2"
        association="alert"
      >
        <AlertOctagonIcon class="w-6 h-6 mr-2" /> {{ error.message }}
      </div>
      <master-form v-if="formModal&&!editMode" :showConfirm="false" :loading="loading" @onSubmit="onCreate" :form="createForm"></master-form>
      <master-form v-if="editMode" :showConfirm="true"  :loading="loading" @onSubmit="onUpdate" :form="editForm"></master-form>
    </side-modal>
    <simple-modal :isOpen="messageModal" @onClosed="onCloseMessageModal">
        <master-form :showConfirm="true" :loading="loading" @onSubmit="onSendMessage"
          :form="sendSMSForm"></master-form>
    </simple-modal>
    <MasterTable 
    v-if="associationConnection" 
    :columns="dataColumns" 
    :data="associationConnection?.edges"
    :editAction="true"
    :viewAction="true"
    :deleteAction="true"  
    :newAction ="true"
    :moreAction ="true"
    :moreMenuItems ="moreMenu"
    :searchColumns = "['name', 'type']"
    :pageInfo ="associationConnection?.pageInfo"
    :loading ="loading"
    @onNavigate = "onNavigate"
    @onSearch = "onSearch"
    @onNew = "showFormModal"
    @onEdit = "showEditForm"
    @onMore = "onMore"
    newButtonText = "Add Association"
    />   
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ComputedRef,
  onMounted,
  ref,
  watchEffect,
} from "vue";
import { AssociationConnection } from "@/views/pages/associations/types/associationConnection";
import MasterTable from "@/components/master-table/Main.vue";
import MasterForm from "@/components/master-form/Main.vue";
import SideModal from "@/components/side-modal/Main.vue";
import SimpleModal from "@/components/simple-modal/Main.vue";
import { dataColumns } from "./table";
import { useStore } from "vuex";
import { createAssociation } from "./forms/create";
import { sendSMSForm } from "./forms/sms";
import { editAssociation } from "./forms/edit";
import { Association } from "./types/association";
import { CreateOneAssociationInput } from "./types/createOneAssociationInput";
import { CreateAssociationInput } from "./types/createAssociationInput";
import { UpdateOneAssociationInput } from "./types/updateOneAssociationInput";
import { MenuItem } from "../../../shared/types/menuItem";
import { OrganizationEdge } from "../organizations/types/organizationEdge";
import { SendSmsAssociationDto } from "./types/SendSmsAssociationDto";
export default defineComponent({
  components: {
    MasterTable,
    SideModal,
    MasterForm,
    SimpleModal,
  },
  setup() {
    const formModal = ref(false);
    const editMode = ref(false);
    const show = ref(false);
    const store = useStore();
    const createForm = ref(createAssociation);
    const editForm = ref(editAssociation);
    const selectedAssociation = ref(null as Association | null);
    const errors = computed(() => store.state.associations.errors);
    const loading = computed(() => store.state.associations.loading);
    const messageModal = ref(false);
    const moreMenu: MenuItem[] = [
      { title: "SMS All Members", name: "sendSms" },
    ];
    const resetErrors = () =>
      store.dispatch("associations/resetErrorsStateAction");

    onMounted(() => {
      store.dispatch("associations/getAssociationAction");
      store.dispatch("organizations/getOrganizationAction");
    });

    watchEffect(() => {
      createForm.value.groups.forEach((group) => {
        group.fields.forEach((field) => {
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

    const associationConnection: ComputedRef<AssociationConnection> = computed(
      () => store.state.associations.associationConnection
    );

    const showEditForm = (value: any) => {
      resetErrors();
      editMode.value = true;
      selectedAssociation.value = value;
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
    const onUpdate = (values: CreateAssociationInput) => {
      if (selectedAssociation.value !== null) {
        const data: UpdateOneAssociationInput = {
          update: values,
          id: selectedAssociation.value.id,
        };
        store.dispatch("associations/updateOneAssociationAction", data);
      }
    };
    const onCreate = (values: CreateAssociationInput) => {
      const data: CreateOneAssociationInput = { association: values };
      store.dispatch("associations/createOneAssociationAction", data);
    };
    const onShow = () => {
      show.value = true;
    };

    const onMore = (values: { item: MenuItem; node: Association }) => {
      if (values.item.name === "sendSms") {
        messageModal.value = true;
        selectedAssociation.value = values.node;
      }
    };

    const onSearch = (filter: any) => {
      store.dispatch("associations/getAssociationAction", {
        filter: filter,
      });
    };

    const onNavigate = (paging: any) => {
      store.dispatch("associations/getAssociationAction", {
        paging: paging,
      });
    };

    const onSendMessage = (values: { message: string }) => {
      if (selectedAssociation.value) {
        const data: SendSmsAssociationDto = {
          associationId: selectedAssociation.value.id,
          message: values.message,
        };
        console.log(data);
        store.dispatch("associations/sendSmsToAssociation", data);
      }
    };

    const onCloseMessageModal = () => {
      messageModal.value = false;
    };

    return {
      associationConnection,
      dataColumns,
      onSearch,
      showFormModal,
      formModal,
      onFormModalClose,
      createAssociation,
      onUpdate,
      onCreate,
      editMode,
      showEditForm,
      editForm,
      selectedAssociation,
      errors,
      loading,
      show,
      onShow,
      onMore,
      onNavigate,
      createForm,
      onSendMessage,
      moreMenu,
      messageModal,
      sendSMSForm,
      onCloseMessageModal,
    };
  },
});
</script>
