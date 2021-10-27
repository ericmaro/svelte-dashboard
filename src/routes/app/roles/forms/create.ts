import type { Form } from "@/components/MasterForm/types/form";

export const createRole: Form = {
  submitButtonText: "Save Role",
  editButtonText: "Edit Role",
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
          description: "Enter role name",
          validationMessage: "Please enter role name",
          span: 4,
          value: "",
        },
        {
          title: "Code",
          label: "Code",
          name: "code",
          type: "text",
          isRequired: false,
          description: "Enter role code",
          validationMessage: "Please role code",
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
          description: "Enter role guard",
          validationMessage: "Please role guard",
          span: 4,
          value: "",
        },
      ],
    },
  ],
};
