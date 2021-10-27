import { CreateUserInput } from "./createUserInput";

export interface CreateOneUserInput {
  user: CreateUserInput;
}

// Converts JSON strings to/from your types
export class CreateOneUserInputModel {
  public static toCreateOneUserInput(json: string): CreateOneUserInput {
    return JSON.parse(json);
  }

  public static createOneUserInputToJson(value: CreateOneUserInput): string {
    return JSON.stringify(value);
  }
}
