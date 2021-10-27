/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldComparison } from "@/shared/types/fieldComparison";

export interface AssociationFilter {
  and?: any[];
  or?: any[];
  id?: FieldComparison;
  name?: FieldComparison;
  type?: FieldComparison;
  createdAt?: FieldComparison;
}
