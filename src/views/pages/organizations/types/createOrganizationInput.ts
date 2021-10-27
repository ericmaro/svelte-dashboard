export interface CreateOrganizationInput {
  name: string;
  type: string;
}

// Converts JSON strings to/from your types
export class CreateOrganizationInputModel {
  public static toCreateOrganizationInput(
    json: string
  ): CreateOrganizationInput {
    return JSON.parse(json);
  }

  public static createOrganizationInputToJson(
    value: CreateOrganizationInput
  ): string {
    return JSON.stringify(value);
  }
}
