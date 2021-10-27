import { PageInfo } from "@/shared/types/paging";
import { PermissionEdge } from "./permissionEdge";

export interface PermissionConnection {
  pageInfo: PageInfo;
  edges: PermissionEdge[];
}
