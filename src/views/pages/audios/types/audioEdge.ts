import { ConnectionCursor } from "@/shared/types/connectionCursor";
import { Audio } from "./audio";

export interface AudioEdge {
  node: Audio;
  cursor: ConnectionCursor;
}
