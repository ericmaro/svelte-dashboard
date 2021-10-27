import { Form } from "@/components/master-form/types/form";

export const editAudio: Form = {
  submitButtonText: "Save Audio",
  editButtonText: "Edit Audio",
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "Audio Information",
      fields: [
        {
          title: "Name",
          label: "Name",
          name: "name",
          type: "text",
          isRequired: true,
          description: "Enter audio name",
          validationMessage: "Please enter audio name",
          span: 4,
          value: "",
        },
        {
          title: "Key",
          label: "Key",
          name: "kay",
          type: "text",
          isRequired: false,
          description: "Enter Key",
          validationMessage: "Please Key",
          span: 4,
          value: "",
        },
        {
          title: "Location",
          label: "Location",
          name: "location",
          type: "text",
          isRequired: false,
          description: "Enter location",
          validationMessage: "Please location",
          span: 4,
          value: "",
        },
      ],
    },
  ],
};
