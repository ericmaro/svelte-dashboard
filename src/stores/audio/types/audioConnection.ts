import type { PageInfo } from "@/shared/types/paging";
import type { AudioEdge } from "./audioEdge";

export interface AudioConnection {
  pageInfo: PageInfo;
  edges: AudioEdge[];
}
