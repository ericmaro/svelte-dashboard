/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldComparison } from "@/shared/types/fieldComparison";

export interface OrganizationFilter {
  and?: any[];
  or?: any[];
  id?: FieldComparison;
  name?: FieldComparison;
  type?: FieldComparison;
  createdAt?: FieldComparison;
}
