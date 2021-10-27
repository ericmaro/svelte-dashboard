export interface UserUpdatePasswordInput {
  newPassword: string;
  newPasswordConfirmation: string;
}

// Converts JSON strings to/from your types
export class UserUpdatePasswordInputModel {
  public static toUserUpdatePasswordInput(
    json: string
  ): UserUpdatePasswordInput {
    return JSON.parse(json);
  }

  public static createUserInputToJson(value: UserUpdatePasswordInput): string {
    return JSON.stringify(value);
  }
}
