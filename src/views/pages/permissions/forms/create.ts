import { Form } from "@/components/master-form/types/form";

export const createPermission: Form = {
  submitButtonText: "Save Permission",
  editButtonText: "Edit Permission",
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "Permission Information",
      fields: [
        {
          title: "Name",
          label: "Name",
          name: "name",
          type: "text",
          isRequired: true,
          description: "Enter permission name",
          validationMessage: "Please enter permission name",
          span: 4,
          value: "",
        },
        {
          title: "Code",
          label: "Code",
          name: "code",
          type: "text",
          isRequired: false,
          description: "Enter permission code",
          validationMessage: "Please permission code",
          span: 4,
          value: "",
        },
        {
          title: "Guard",
          label: "Guard",
          name: "guard",
          type: "select",
          options: [
            { value: "admin", label: "Admin" },
            { value: "user", label: "User" },
          ],
          isRequired: false,
          description: "Enter permission guard",
          validationMessage: "Please permission guard",
          span: 4,
          value: "",
        },
      ],
    },
  ],
};
