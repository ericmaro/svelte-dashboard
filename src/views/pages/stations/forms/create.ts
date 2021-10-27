import { Form } from "@/components/master-form/types/form";

export const createStation: Form = {
  submitButtonText: "Save Station",
  editButtonText: "Edit Station",
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "User Information",
      fields: [
        {
          title: "Name",
          label: "Name",
          name: "name",
          type: "text",
          isRequired: true,
          description: "Enter station name",
          validationMessage: "Please enter station name",
          span: 4,
          value: "",
        },
        {
          title: "Stream Url",
          label: "Stream Url",
          name: "streamUrl",
          type: "text",
          isRequired: false,
          description: "Enter Stream Url",
          validationMessage: "Please Stream Url",
          span: 4,
          value: "",
        },
        {
          title: "Is listening",
          label: "Is listening",
          name: "isListening",
          type: "text",
          isRequired: false,
          description: "Enter Is listening",
          validationMessage: "Please Is listening",
          span: 4,
          value: "",
        },
      ],
    },
  ],
};
