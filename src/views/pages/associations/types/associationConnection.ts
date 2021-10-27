import { PageInfo } from "@/shared/types/paging";
import { AssociationEdge } from "./associationEdge";

export interface AssociationConnection {
  pageInfo: PageInfo;
  edges: AssociationEdge[];
}
