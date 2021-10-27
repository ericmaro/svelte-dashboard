import { LoginResponseType } from "./loginResponseType";
import { Role } from "@/views/pages/roles/types/role";
import { Organization } from "../../organizations/types/organization";

export interface User {
  firstName: string;
  middleName: null;
  lastName: string;
  gender: string;
  dateOfBirth: null;
  email: string;
  phone: string;
  address: string;
  id: number;
  roleId: number;
  active: boolean;
  residenceID: null;
  workID: string;
  countryId: null;
  regionId: null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  organization: Organization;
  permissionGrants: Role[];
  permissions: any[];
  region: null;
  country: null;
  role: Role;
}

export class UserModel {
  public static toUser(json: string): User {
    return JSON.parse(json);
  }

  public static toJson(value: User): string {
    return JSON.stringify(value);
  }

  public static getToken(): string | null {
    const respString = localStorage.getItem("login");
    if (!respString) return null;
    const results = respString
      ? LoginResponseType.toLoginResponseType(respString)
      : null;
    if (!results) return null;
    return results.accessToken;
  }
}
