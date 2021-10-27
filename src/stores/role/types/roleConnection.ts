import type { PageInfo } from "@/shared/types/paging";
import type { RoleEdge } from "./roleEdge";

export interface RoleConnection {
  pageInfo: PageInfo;
  edges: RoleEdge[];
}
