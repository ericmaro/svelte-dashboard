export interface CreateAssociationInput {
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
}

// Converts JSON strings to/from your types
export class CreateAssociationInputModel {
  public static toCreateAssociationInput(json: string): CreateAssociationInput {
    return JSON.parse(json);
  }

  public static createAssociationInputToJson(
    value: CreateAssociationInput
  ): string {
    return JSON.stringify(value);
  }
}
