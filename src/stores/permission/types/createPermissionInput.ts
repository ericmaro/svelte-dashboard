export interface CreatePermissionInput {
  name: string;
  guard: string;
  code?: string;
}

// Converts JSON strings to/from your types
export class CreatePermissionInputModel {
  public static toCreatePermissionInput(json: string): CreatePermissionInput {
    return JSON.parse(json);
  }

  public static createPermissionInputToJson(
    value: CreatePermissionInput
  ): string {
    return JSON.stringify(value);
  }
}
