import { CreateRoleInput } from "./createRoleInput";

export interface UpdateOneRoleInput {
  update: CreateRoleInput;
  id: number;
}

// Converts JSON strings to/from your types
export class UpdateOneRoleInputModel {
  public static toUpdateOneRoleInput(json: string): UpdateOneRoleInput {
    return JSON.parse(json);
  }

  public static createOneRoleInputToJson(value: UpdateOneRoleInput): string {
    return JSON.stringify(value);
  }
}
