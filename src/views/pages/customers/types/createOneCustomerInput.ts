import { CreateCustomerInput } from "./createCustomerInput";

export interface CreateOneCustomerInput {
  customer: CreateCustomerInput;
}

// Converts JSON strings to/from your types
export class CreateOneCustomerInputModel {
  public static toCreateOneCustomerInput(json: string): CreateOneCustomerInput {
    return JSON.parse(json);
  }

  public static createOneCustomerInputToJson(
    value: CreateOneCustomerInput
  ): string {
    return JSON.stringify(value);
  }
}
