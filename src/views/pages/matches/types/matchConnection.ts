import { PageInfo } from "@/shared/types/paging";
import { MatchEdge } from "./matchEdge";

export interface MatchConnection {
  pageInfo: PageInfo;
  edges: MatchEdge[];
}
