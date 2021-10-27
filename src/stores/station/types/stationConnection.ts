import { PageInfo } from "@/shared/types/paging";
import { StationEdge } from "./stationEdge";

export interface StationConnection {
  pageInfo: PageInfo;
  edges: StationEdge[];
}
