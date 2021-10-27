import { CreateCustomerDetails } from "./createCustomerDetails";

export interface UpdateOneCustomerDetailsInput {
  update: CreateCustomerDetails;
  id: number;
}

// Converts JSON strings to/from your types
export class UpdateOneCustomerDetailsInputModel {
  public static toUpdateOneCustomerDetailsInput(
    json: string
  ): UpdateOneCustomerDetailsInput {
    return JSON.parse(json);
  }

  public static createOneCustomerInputToJson(
    value: UpdateOneCustomerDetailsInput
  ): string {
    return JSON.stringify(value);
  }
}
