import type { ConnectionCursor } from "@/shared/types/connectionCursor";
import type { Match } from "./match";

export interface MatchEdge {
  node: Match;
  cursor: ConnectionCursor;
}
