import { CreateAssociationInput } from "./createAssociationInput";

export interface UpdateOneAssociationInput {
  update: CreateAssociationInput;
  id: number;
}

// Converts JSON strings to/from your types
export class UpdateOneAssociationInputModel {
  public static toUpdateOneAssociationInput(
    json: string
  ): UpdateOneAssociationInput {
    return JSON.parse(json);
  }

  public static createOneAssociationInputToJson(
    value: UpdateOneAssociationInput
  ): string {
    return JSON.stringify(value);
  }
}
