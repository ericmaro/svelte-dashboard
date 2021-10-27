import { ConnectionCursor } from "@/shared/types/connectionCursor";
import { Customer } from "./customer";

export interface CustomerEdge {
  node: Customer;
  cursor: ConnectionCursor;
}
