import { CreateCustomerInput } from "./createCustomerInput";

export interface UpdateOneCustomerInput {
  update: CreateCustomerInput;
  id: number;
}

// Converts JSON strings to/from your types
export class UpdateOneCustomerInputModel {
  public static toUpdateOneCustomerInput(json: string): UpdateOneCustomerInput {
    return JSON.parse(json);
  }

  public static createOneCustomerInputToJson(
    value: UpdateOneCustomerInput
  ): string {
    return JSON.stringify(value);
  }
}
