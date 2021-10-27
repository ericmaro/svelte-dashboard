import type { Permission } from "@/stores/permission/types/permission";

export interface Role {
  id: number;
  name: string;
  guard: string;
  code?: string;
  permissions: Permission[]
}

export class RoleModel {
  public static toRole(json: string): Role {
    return JSON.parse(json);
  }

  public static toJson(value: Role): string {
    return JSON.stringify(value);
  }
}
