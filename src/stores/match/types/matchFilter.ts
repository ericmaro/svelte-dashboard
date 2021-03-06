/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FieldComparison } from "@/shared/types/fieldComparison";

export interface MatchFilter {
  and?: any[];
  or?: any[];
  id?: FieldComparison;
  stationId?: FieldComparison;
  audioId?: FieldComparison;
  playedAt?: FieldComparison;
}
