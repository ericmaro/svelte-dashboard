export interface Permission {
  id: number;
  name: string;
  guard: string;
  code?: string;
}

export class PermissionModel {
  public static toPermission(json: string): Permission {
    return JSON.parse(json);
  }

  public static toJson(value: Permission): string {
    return JSON.stringify(value);
  }
}
