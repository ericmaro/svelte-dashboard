export interface Organization {
  id: number;
  name: string;
  type: string;
  code?: string;
}

export class OrganizationModel {
  public static toOrganization(json: string): Organization {
    return JSON.parse(json);
  }

  public static toJson(value: Organization): string {
    return JSON.stringify(value);
  }
}
