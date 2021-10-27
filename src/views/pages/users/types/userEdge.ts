import { ConnectionCursor } from "@/shared/types/connectionCursor";
import { User } from "./user";

export interface UserEdge {
  node: User;
  cursor: ConnectionCursor;
}
