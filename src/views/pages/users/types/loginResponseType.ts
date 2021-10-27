/* eslint-disable @typescript-eslint/no-explicit-any */
// To parse this data:
//
//   import { Convert, LoginResponseType } from "./file";
//
//   const LoginResponseType = LoginResponseType.toLoginResponseType(json);

import { User } from "./user";

export interface LoginResponseType {
  tokenType: string;
  expiresIn: number;
  accessToken: string;
  refreshToken: null;
  user: User;
}

// Converts JSON strings to/from your types
export class LoginResponseType {
  public static toLoginResponseType(json: string): LoginResponseType {
    return JSON.parse(json);
  }

  public static LoginResponseTypeToJson(value: LoginResponseType): string {
    return JSON.stringify(value);
  }
}
