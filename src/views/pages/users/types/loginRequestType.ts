// To parse this data:
//
//   import { Convert, LoginRequestType } from "./file";
//
//   const loginRequestType = LoginRequestType.toLoginRequestType(json);

export interface LoginRequestType {
  identifier: string;
  password: string;
}

// Converts JSON strings to/from your types
export class LoginRequestType {
  public static toLoginRequestType(json: string): LoginRequestType {
    return JSON.parse(json);
  }

  public static loginRequestTypeToJson(value: LoginRequestType): string {
    return JSON.stringify(value);
  }
}
