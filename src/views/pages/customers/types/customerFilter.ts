/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldComparison } from "@/shared/types/fieldComparison";

export interface CustomerFilter {
  and?: any[];
  or?: any[];
  id?: FieldComparison;
  active?: FieldComparison;
  phone?: FieldComparison;
  email?: FieldComparison;
  fullName?: FieldComparison;
  image?: FieldComparison;
  regionId?: FieldComparison;
  organizationId?: FieldComparison;
  createdAt?: FieldComparison;
  updatedAt?: FieldComparison;
  detailsId?: FieldComparison;
  propertyId?: FieldComparison;
}
