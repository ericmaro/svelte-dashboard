import { CreateOrganizationInput } from "./createOrganizationInput";

export interface CreateOneOrganizationInput {
  organization: CreateOrganizationInput;
}

// Converts JSON strings to/from your types
export class CreateOneOrganizationInputModel {
  public static toCreateOneOrganizationInput(
    json: string
  ): CreateOneOrganizationInput {
    return JSON.parse(json);
  }

  public static createOneOrganizationInputToJson(
    value: CreateOneOrganizationInput
  ): string {
    return JSON.stringify(value);
  }
}
