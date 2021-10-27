import { CreatePermissionInput } from "./createPermissionInput";

export interface UpdateOnePermissionInput {
  update: CreatePermissionInput;
  id: number;
}

// Converts JSON strings to/from your types
export class UpdateOnePermissionInputModel {
  public static toUpdateOnePermissionInput(
    json: string
  ): UpdateOnePermissionInput {
    return JSON.parse(json);
  }

  public static createOnePermissionInputToJson(
    value: UpdateOnePermissionInput
  ): string {
    return JSON.stringify(value);
  }
}
