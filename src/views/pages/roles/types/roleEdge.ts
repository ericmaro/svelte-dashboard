import { ConnectionCursor } from "@/shared/types/connectionCursor";
import { Role } from "./role";

export interface RoleEdge {
  node: Role;
  cursor: ConnectionCursor;
}
