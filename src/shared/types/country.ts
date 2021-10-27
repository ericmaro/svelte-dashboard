import { Region } from "./region";

export interface Country {
  id: number;
  name: string;
  code: string;
  regions?: Region[];
}
