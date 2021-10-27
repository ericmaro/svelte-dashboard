import { Form } from "@/components/master-form/types/form";

export const updatePasswordForm: Form = {
  submitButtonText: "Change",
  editButtonText: "Edit User",
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "Update User Password",
      fields: [
        {
          title: "New Password",
          label: "Password",
          name: "newPassword",
          type: "password",
          isRequired: true,
          description: "Enter New Password",
          validationMessage: "Please fill new password",
          span: 12,
          value: "",
        },
        {
          title: "New Password Confirmation",
          label: "Password Confirmation",
          name: "newPasswordConfirmation",
          type: "password",
          isRequired: true,
          description: "Enter New Password Confirmation",
          validationMessage: "Please fill new password Confirmation",
          span: 12,
          value: "",
        },
      ],
    },
  ],
};
