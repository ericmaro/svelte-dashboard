import { CreateUserInput } from "./createUserInput";

export interface UpdateOneUserInput {
  update: CreateUserInput;
  id: number;
}

// Converts JSON strings to/from your types
export class UpdateOneUserInputModel {
  public static toUpdateOneUserInput(json: string): UpdateOneUserInput {
    return JSON.parse(json);
  }

  public static createOneUserInputToJson(value: UpdateOneUserInput): string {
    return JSON.stringify(value);
  }
}
