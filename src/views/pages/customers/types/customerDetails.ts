export interface CustomerDetails {
  id: number;
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

export class CustomerDetailsModel {
  public static toCustomerDetails(json: string): CustomerDetails {
    return JSON.parse(json);
  }

  public static toJson(value: CustomerDetails): string {
    return JSON.stringify(value);
  }
}
