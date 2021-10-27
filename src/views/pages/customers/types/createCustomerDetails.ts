export interface CreateCustomerDetails {
  sex: string;
  maritalStatus: string;
  latitude: string;
  longitude: string;
  ward: string;
  village: string;
  region: string;
  district: string;
  country: string;
  occupation: string;
  typeOfId: string;
  idNumber: string;
  spouseName: string;
  numberOfChildren: string;
  numberOfDependents: string;
  nextOfKin: string;
  headOfHousehold: string;
  extendedFamily: string;
}

// Converts JSON strings to/from your types
export class CreateCustomerDetailsModel {
  public static toCreateCustomerDetails(json: string): CreateCustomerDetails {
    return JSON.parse(json);
  }

  public static createCustomerInputToJson(
    value: CreateCustomerDetails
  ): string {
    return JSON.stringify(value);
  }
}
