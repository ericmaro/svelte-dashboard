import { ConnectionCursor } from "@/shared/types/connectionCursor";
import { Association } from "./association";

export interface AssociationEdge {
  node: Association;
  cursor: ConnectionCursor;
}
