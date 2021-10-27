import { Form } from "@/components/master-form/types/form";

export const sendSMSForm: Form = {
  submitButtonText: "Send",
  editButtonText: "Send",
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "Send sms",
      fields: [
        {
          title: "Message",
          label: "Message",
          name: "message",
          type: "textArea",
          isRequired: true,
          description: "Send a SMS",
          validationMessage: "Please fill message",
          span: 12,
          value: "",
        },
      ],
    },
  ],
};
