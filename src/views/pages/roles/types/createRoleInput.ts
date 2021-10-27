export interface CreateRoleInput {
  name: string;
  guard: string;
  code?: string;
}

// Converts JSON strings to/from your types
export class CreateRoleInputModel {
  public static toCreateRoleInput(json: string): CreateRoleInput {
    return JSON.parse(json);
  }

  public static createRoleInputToJson(value: CreateRoleInput): string {
    return JSON.stringify(value);
  }
}
