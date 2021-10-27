/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldComparison } from "@/shared/types/fieldComparison";

export interface UserFilter {
  and?: any[];
  or?: any[];
  id?: FieldComparison;
  active?: FieldComparison;
  gender?: FieldComparison;
  firstName?: FieldComparison;
  middleName?: FieldComparison;
  lastName?: FieldComparison;
  phone?: FieldComparison;
  email?: FieldComparison;
  address?: FieldComparison;
  createdAt?: FieldComparison;
}
