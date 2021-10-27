/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FieldComparison } from "@/shared/types/fieldComparison";

export interface AudioFilter {
  and?: any[];
  or?: any[];
  id?: FieldComparison;
  code?: FieldComparison;
  guard?: FieldComparison;
  createdAt?: FieldComparison;
}
