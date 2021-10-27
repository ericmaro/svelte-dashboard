import type { Form } from "@/components/MasterForm/types/form";

export const createUser: Form = {
  submitButtonText: "",
  editButtonText: "",
  grid:3,
  submitButtonClass: "right-align-submit",
  groups: [
    {
      title: "Personal Information",
      fields: [
        {
          title: "First Name",
          label: "First name",
          name: "firstName",
          type: "text",
          isRequired: true,
          description: "Enter your first name",
          validationMessage: "Please enter your First name",
       
          value: "",
        },
        {
          title: "Middle Name",
          label: "Middle name",
          name: "middleName",
          type: "text",
          isRequired: false,
          description: "Enter your middle name",
          validationMessage: "Please enter your Middle name",
    
          value: "",
        },
        {
          title: "Last Name",
          label: "Last name",
          name: "lastName",
          type: "text",
          isRequired: true,
          description: "Enter your last name",
          validationMessage: "Please enter your last name",
      
          value: "",
        },
        {
          title: "Email",
          label: "Email",
          name: "email",
          type: "text",
          isRequired: false,
          description: "Enter valid email",
          validationMessage: "Please enter valid email",
          span: 2,
          value: "",
        },
        {
          title: "Phone number",
          label: "Phone number",
          name: "phone",
          type: "text",
          isRequired: false,
          description: "Enter phone number",
          validationMessage: "Please fill phone number",
    
          value: "",
        },

        {
          title: "Role",
          label: "Role",
          name: "roleId",
          type: "select",
          options: [],
          isRequired: false,
          description: "Select user role",
          validationMessage: "Please select a role",
          numericValue:true,
          value: "",
        },

        {
          title: "Organization",
          label: "Organization",
          name: "organizationId",
          type: "select",
          options: [],
          numericValue:true,
          isRequired: false,
          description: "Select user Organization",
          validationMessage: "Please select Organization",
     
          value: "",
        },

        {
          title: "Password",
          label: "Password",
          name: "password",
          type: "password",
          isRequired: true,
          description: "Enter Password",
          validationMessage: "Please fill password",
   
          value: "",
        },
      ],
    },
  ],
};
