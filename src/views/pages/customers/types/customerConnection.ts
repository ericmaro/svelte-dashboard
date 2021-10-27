import { PageInfo } from "@/shared/types/paging";
import { CustomerEdge } from "./customerEdge";

export interface CustomerConnection {
  pageInfo: PageInfo;
  edges: CustomerEdge[];
}
