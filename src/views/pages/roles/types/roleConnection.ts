import { PageInfo } from "@/shared/types/paging";
import { RoleEdge } from "./roleEdge";

export interface RoleConnection {
  pageInfo: PageInfo;
  edges: RoleEdge[];
}
