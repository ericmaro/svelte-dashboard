import { PageInfo } from "@/shared/types/paging";
import { OrganizationEdge } from "./organizationEdge";

export interface OrganizationConnection {
  pageInfo: PageInfo;
  edges: OrganizationEdge[];
}
