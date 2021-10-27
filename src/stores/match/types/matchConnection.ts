import type { PageInfo } from "@/shared/types/paging";
import type { MatchEdge } from "./matchEdge";

export interface MatchConnection {
  pageInfo: PageInfo;
  edges: MatchEdge[];
  totalCount: number;
}
