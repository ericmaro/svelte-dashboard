import { PageInfo } from "@/shared/types/paging";
import { UserEdge } from "./userEdge";

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}
