import { CreateOrganizationInput } from "./createOrganizationInput";

export interface UpdateOneOrganizationInput {
  update: CreateOrganizationInput;
  id: number;
}

// Converts JSON strings to/from your types
export class UpdateOneOrganizationInputModel {
  public static toUpdateOneOrganizationInput(
    json: string
  ): UpdateOneOrganizationInput {
    return JSON.parse(json);
  }

  public static createOneOrganizationInputToJson(
    value: UpdateOneOrganizationInput
  ): string {
    return JSON.stringify(value);
  }
}
