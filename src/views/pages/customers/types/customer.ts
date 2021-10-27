import { Region } from "@/shared/types/region";
import { CustomerDetails } from "./customerDetails";

export interface Customer {
  id: number;
  active: boolean;
  phone: string;
  email?: string;
  fullName: string;
  regionId: number;
  details?: CustomerDetails;
  region?: Region;
  requiresProfileUpdate: boolean;
}

export class CustomerModel {
  public static toCustomer(json: string): Customer {
    return JSON.parse(json);
  }

  public static toJson(value: Customer): string {
    return JSON.stringify(value);
  }
}
