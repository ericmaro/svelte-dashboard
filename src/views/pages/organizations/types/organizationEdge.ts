import { ConnectionCursor } from "@/shared/types/connectionCursor";
import { Organization } from "./organization";

export interface OrganizationEdge {
  node: Organization;
  cursor: ConnectionCursor;
}
