import type { ConnectionCursor } from "@/shared/types/connectionCursor";
import type { Audio } from "./audio";

export interface AudioEdge {
  node: Audio;
  cursor: ConnectionCursor;
}
