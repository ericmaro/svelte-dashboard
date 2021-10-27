import { CreateCustomerDetails } from "./createCustomerDetails";

export interface CreateOneCustomerDetailsInput {
  customerDetails: CreateCustomerDetails;
}

// Converts JSON strings to/from your types
export class CreateOneCustomerDetailsInputModel {
  public static toCreateOneCustomerDetailsInput(
    json: string
  ): CreateOneCustomerDetailsInput {
    return JSON.parse(json);
  }

  public static createOneCustomerInputToJson(
    value: CreateOneCustomerDetailsInput
  ): string {
    return JSON.stringify(value);
  }
}
