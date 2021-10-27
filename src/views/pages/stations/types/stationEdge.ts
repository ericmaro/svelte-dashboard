import { ConnectionCursor } from "@/shared/types/connectionCursor";
import { Station } from "./station";

export interface StationEdge {
  node: Station;
  cursor: ConnectionCursor;
}
