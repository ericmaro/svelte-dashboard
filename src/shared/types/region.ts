import { Country } from "./country";

export interface Region {
  id: number;
  name: string;
  code: string;
  country: Country;
}
