import type { ConnectionCursor } from "@/shared/types/connectionCursor";
import type { Role } from "./role";

export interface RoleEdge {
  node: Role;
  cursor: ConnectionCursor;
}
