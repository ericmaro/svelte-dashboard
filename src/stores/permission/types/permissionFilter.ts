/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldComparison } from "@/shared/types/fieldComparison";

export interface PermissionFilter {
  and?: any[];
  or?: any[];
  id?: FieldComparison;
  code?: FieldComparison;
  guard?: FieldComparison;
  createdAt?: FieldComparison;
}
