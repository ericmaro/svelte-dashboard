export interface Association {
  id: number;
  name: string;
  quantityThreshold: number;
  description: string;
  address: string;
  phone: string;
  email: string;
  ward: string;
  village: string;
  region: string;
  district: string;
  organizationId: number;
}

export class AssociationModel {
  public static toAssociation(json: string): Association {
    return JSON.parse(json);
  }

  public static toJson(value: Association): string {
    return JSON.stringify(value);
  }
}
