import { ConnectionCursor } from "@/shared/types/connectionCursor";
import { Permission } from "./permission";

export interface PermissionEdge {
  node: Permission;
  cursor: ConnectionCursor;
}
