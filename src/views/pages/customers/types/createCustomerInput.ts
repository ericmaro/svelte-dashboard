export interface CreateCustomerInput {
  active: boolean;
  phone: string;
  email?: string;
  fullName: string;
  regionId: number;
  associationId: number;
  organizationId: number;
}

// Converts JSON strings to/from your types
export class CreateCustomerInputModel {
  public static toCreateCustomerInput(json: string): CreateCustomerInput {
    return JSON.parse(json);
  }

  public static createCustomerInputToJson(value: CreateCustomerInput): string {
    return JSON.stringify(value);
  }
}
