import { CreateRoleInput } from "./createRoleInput";

export interface CreateOneRoleInput {
  role: CreateRoleInput;
}

// Converts JSON strings to/from your types
export class CreateOneRoleInputModel {
  public static toCreateOneRoleInput(json: string): CreateOneRoleInput {
    return JSON.parse(json);
  }

  public static createOneRoleInputToJson(value: CreateOneRoleInput): string {
    return JSON.stringify(value);
  }
}
