import { ConnectionCursor } from "@/shared/types/connectionCursor";
import { Match } from "./match";

export interface MatchEdge {
  node: Match;
  cursor: ConnectionCursor;
}
