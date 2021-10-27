import { CreateStationInput } from "./createStationInput";

export interface CreateOneStationInput {
  station: CreateStationInput;
}

// Converts JSON strings to/from your types
export class CreateOneStationInputModel {
  public static toCreateOneStationInput(json: string): CreateOneStationInput {
    return JSON.parse(json);
  }

  public static createOneStationInputToJson(
    value: CreateOneStationInput
  ): string {
    return JSON.stringify(value);
  }
}
