import { CreatePermissionInput } from "./createPermissionInput";

export interface CreateOnePermissionInput {
  permission: CreatePermissionInput;
}

// Converts JSON strings to/from your types
export class CreateOnePermissionInputModel {
  public static toCreateOnePermissionInput(
    json: string
  ): CreateOnePermissionInput {
    return JSON.parse(json);
  }

  public static createOnePermissionInputToJson(
    value: CreateOnePermissionInput
  ): string {
    return JSON.stringify(value);
  }
}
