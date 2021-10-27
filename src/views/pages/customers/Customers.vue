<template lang="jsx">
  <div>
    <side-modal :visible="formModal" size="lg" @onClosed="onFormModalClose"
      :title="editMode?'Edit Customer':'Create new Customer'">
      <div v-for="(error, i) in errors" :key="i" class="alert alert-danger-soft mt-5 show flex items-center mb-2"
        customer="alert">
        <AlertOctagonIcon class="w-6 h-6 mr-2" /> {{ error.message }}
      </div>
      <master-form v-if="formModal&&!editMode" :showConfirm="false" :loading="loading" @onSubmit="onCreate"
        :form="createForm"></master-form>
      <master-form v-if="editMode" :showConfirm="true" :loading="loading" @onSubmit="onUpdate" :form="editForm">
      </master-form>
      <div class="mt-8" v-if="editMode">
        <master-form v-if="!editDetailsMode" :showConfirm="false" :loading="loading" @onSubmit="onCreateDetails"
          :form="createDetailsForm"></master-form>
        <master-form v-if="editDetailsMode" :showConfirm="false" :loading="loading" @onSubmit="onUpdateDetails"
          :form="editDetailsForm"></master-form>

      </div>
    </side-modal>
     <simple-modal :isOpen="messageModal" @onClosed="onCloseMessageModal">
        <master-form :showConfirm="true" :loading="loading" @onSubmit="onSendMessage"
          :form="sendSMSForm"></master-form>
    </simple-modal>
    <MasterTable 
    v-if="customerConnection" 
    :columns="dataColumns" 
    :data="customerConnection?.edges" 
    :editAction="true"
      :viewAction="true" 
      :deleteAction="true" 
      :newAction="true" 
      :moreAction="true" 
      :moreMenuItems="moreMenu"
      :searchColumns="['firstName', 'lastName', 'phone', 'email']" 
      :pageInfo="customerConnection?.pageInfo"
      :loading="loading"
      :extractField="'details'"
       @onNavigate="onNavigate"
       @onSearch="onSearch" 
      @onNew="showFormModal" 
      @onEdit="showEditForm"
      @onMore="onMore"
      @onSelectAction="onSelectAction"
      selectButtonText="Send SMS"
      newButtonText="Add Customer" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ComputedRef,
  onMounted,
  ref,
  watchEffect,
  Ref,
} from "vue";
import { CustomerConnection } from "@/views/pages/customers/types/customerConnection";
import MasterTable from "@/components/master-table/Main.vue";
import MasterForm from "@/components/master-form/Main.vue";
import SideModal from "@/components/side-modal/Main.vue";
import SimpleModal from "@/components/simple-modal/Main.vue";
import { dataColumns } from "./table";
import { useStore } from "vuex";
import { createCustomer, createCustomerDetails } from "./forms/create";
import { sendSMSForm } from "./forms/sms";
import { editCustomer, editCustomerDetails } from "./forms/edit";
import { Customer } from "./types/customer";
import { CreateOneCustomerInput } from "./types/createOneCustomerInput";
import { CreateCustomerInput } from "./types/createCustomerInput";
import { CreateCustomerDetails } from "./types/createCustomerDetails";
import { CreateOneCustomerDetailsInput } from "./types/createOneCustomerDetailsInput";
import { UpdateOneCustomerInput } from "./types/updateOneCustomerInput";
import { MenuItem } from "../../../shared/types/menuItem";
import { OrganizationEdge } from "../organizations/types/organizationEdge";
import { AssociationEdge } from "../associations/types/associationEdge";
import { Region } from "@/shared/types/region";
import { UpdateOneCustomerDetailsInput } from "./types/updateCustomerDetailsInput";
import { SendSmsCustomerDto } from "./types/SendSmsCustomerDto";
import { CustomerFilter } from "./types/customerFilter";
import { User } from "../users/types/user";
export default defineComponent({
  components: {
    MasterTable,
    SideModal,
    MasterForm,
    SimpleModal,
  },
  setup() {
    const formModal = ref(false);
    const messageModal = ref(false);
    const editMode = ref(false);
    const editDetailsMode = ref(false);
    const show = ref(false);
    const selectedCustomers: Ref<Customer[]> = ref([]);
    const store = useStore();
    const editForm = ref(editCustomer);
    const createForm = ref(createCustomer);
    const editDetailsForm = ref(editCustomerDetails);
    const createDetailsForm = ref(createCustomerDetails);
    const selectedCustomer = ref(null as Customer | null);
    const errors = computed(() => store.state.customers.errors);
    const loading = computed(() => store.state.customers.loading);

    const resetErrors = () =>
      store.dispatch("customers/resetErrorsStateAction");

    onMounted(() => {
      store.dispatch("users/getLoggedInUserAction");
      getCustomers();
      store.dispatch("organizations/getOrganizationAction");
      store.dispatch("regions/getRegionAction");
      store.dispatch("associations/getAssociationAction");
    });

    watchEffect(() => {
      createForm.value.groups.forEach((group) => {
        group.fields.forEach((field) => {
          if (field.name === "associationId") {
            field.options = store.state.associations.associationConnection?.edges?.map(
              (edge: AssociationEdge) => {
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
          if (field.name === "regionId") {
            field.options = store.state.regions?.regions?.map(
              (region: Region) => {
                return {
                  label: region.name,
                  value: region.id,
                } as { label: string; value: any };
              }
            );
          }
        });
      });
      editForm.value.groups.forEach((group) => {
        group.fields.forEach((field) => {
          if (field.name === "associationId") {
            field.options = store.state.associations.associationConnection?.edges?.map(
              (edge: AssociationEdge) => {
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
          if (field.name === "regionId") {
            field.options = store.state.regions?.regions?.map(
              (region: Region) => {
                return {
                  label: region.name,
                  value: region.id,
                } as { label: string; value: any };
              }
            );
          }
        });
      });
    });

    const getDefaultFilter = (user: User) => {
      if (user?.role?.name === "ADMIN") return {} as CustomerFilter;
      return {
        organizationId: user?.organization ? user.organization.id : null,
      } as CustomerFilter;
    };

    const getCustomers = () => {
      const customerFilter = getDefaultFilter(user?.value);
      store.dispatch("customers/getCustomerAction", {
        filter: customerFilter,
      });
    };

    const customerConnection: ComputedRef<CustomerConnection> = computed(
      () => store.state.customers.customerConnection
    );
    const user: ComputedRef<User> = computed(
      () => store.state.users.loggedInUser
    );

    const showEditForm = (value: any) => {
      resetErrors();
      editMode.value = true;
      selectedCustomer.value = value;
      showFormModal();
      editForm.value.groups.map((group) =>
        group.fields.map((field) => (field.value = value[field.name]))
      );

      if (value["details"]) {
        editDetailsMode.value = true;
        editDetailsForm.value.groups.map((group) =>
          group.fields.map(
            (field) => (field.value = value["details"][field.name])
          )
        );
      } else {
        editDetailsMode.value = false;
      }
    };
    const showFormModal = () => {
      resetErrors();
      formModal.value = true;
    };

    const onFormModalClose = () => {
      show.value = false;
      formModal.value = false;
      editMode.value = false;
    };
    const onUpdate = (values: CreateCustomerInput) => {
      if (selectedCustomer.value !== null) {
        const data: UpdateOneCustomerInput = {
          update: values,
          id: selectedCustomer.value.id,
        };
        store.dispatch("customers/updateOneCustomerAction", data);
      }
    };
    const onCreate = (values: CreateCustomerInput) => {
      const data: CreateOneCustomerInput = { customer: values };
      store.dispatch("customers/createOneCustomerAction", data);
    };
    const onCreateDetails = (values: CreateCustomerDetails) => {
      console.log(values);
      if (selectedCustomer.value !== null) {
        const data: CreateOneCustomerDetailsInput = { customerDetails: values };
        store.dispatch("customers/createOneCustomerDetailsAction", {
          details: data,
          customerId: selectedCustomer.value.id,
        });
      }
    };

    const onUpdateDetails = (values: CreateCustomerDetails) => {
      if (
        selectedCustomer.value !== null &&
        selectedCustomer.value?.details?.id
      ) {
        const data: UpdateOneCustomerDetailsInput = {
          update: values,
          id: selectedCustomer.value.details.id,
        };
        store.dispatch("customers/updateOneCustomerDetailsAction", data);
      }
    };
    const onShow = () => {
      show.value = true;
    };

    const onMore = (values: { item: MenuItem; node: Customer }) => {
      console.log(values);
    };

    const onSearch = (filter: CustomerFilter) => {
      const defaultFilter = getDefaultFilter(user.value);
      const customerFilter = {
        ...filter,
        defaultFilter,
      } as CustomerFilter;
      store.dispatch("customers/getCustomerAction", {
        filter: customerFilter,
      });
    };

    const onNavigate = (paging: any) => {
      store.dispatch("customers/getCustomerAction", {
        paging: paging,
      });
    };

    const onSelectAction = (customers: Customer[]) => {
      messageModal.value = true;
      selectedCustomers.value = customers;
    };
    const onSendMessage = (values: { message: string }) => {
      if (selectedCustomers.value.length > 0) {
        const data: SendSmsCustomerDto = {
          recipientIds: selectedCustomers.value.map((customer: Customer) =>
            customer.id.toString()
          ),
          message: values.message,
        };
        store.dispatch("customers/sendSmsToCustomers", data);
      }
    };

    const onCloseMessageModal = () => {
      messageModal.value = false;
    };

    return {
      customerConnection,
      dataColumns,
      onSearch,
      showFormModal,
      formModal,
      onFormModalClose,
      createCustomer,
      onUpdate,
      onCreate,
      editMode,
      showEditForm,
      editForm,
      selectedCustomer,
      errors,
      loading,
      show,
      onShow,
      onMore,
      onNavigate,
      createForm,
      createDetailsForm,
      editDetailsForm,
      editDetailsMode,
      onCreateDetails,
      onUpdateDetails,
      messageModal,
      onSelectAction,
      onCloseMessageModal,
      sendSMSForm,
      onSendMessage,
    };
  },
});
</script>
