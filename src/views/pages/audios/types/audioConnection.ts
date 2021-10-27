import { PageInfo } from "@/shared/types/paging";
import { AudioEdge } from "./audioEdge";

export interface AudioConnection {
  pageInfo: PageInfo;
  edges: AudioEdge[];
}
