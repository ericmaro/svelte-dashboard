import { CreateAssociationInput } from "./createAssociationInput";

export interface CreateOneAssociationInput {
  association: CreateAssociationInput;
}

// Converts JSON strings to/from your types
export class CreateOneAssociationInputModel {
  public static toCreateOneAssociationInput(
    json: string
  ): CreateOneAssociationInput {
    return JSON.parse(json);
  }

  public static createOneAssociationInputToJson(
    value: CreateOneAssociationInput
  ): string {
    return JSON.stringify(value);
  }
}
