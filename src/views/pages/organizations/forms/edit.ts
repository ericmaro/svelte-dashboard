import { Form } from "@/components/master-form/types/form";

export const editOrganization: Form = {
  submitButtonText: "Save Organization",
  editButtonText: "Edit Organization",
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "Organization Information",
      fields: [
        {
          title: "Name",
          label: "Name",
          name: "name",
          type: "text",
          isRequired: true,
          description: "Enter name",
          validationMessage: "Please enter name",
          span: 12,
          value: "",
        },
        {
          title: "Type",
          label: "Type",
          name: "type",
          type: "select",
          options: [
            { value: "MERCHANT", label: "Merchant" },
            { value: "SERVICEPROVIDER", label: "Service Provider" },
            { value: "DONOR", label: "Donor" },
            { value: "PARTNER", label: "Partner" },
          ],
          isRequired: false,
          description: "Enter Type",
          validationMessage: "Please Type",
          span: 12,
          value: "",
        },
      ],
    },
  ],
};
