import { CreateStationInput } from "./createStationInput";

export interface UpdateOneStationInput {
  update: CreateStationInput;
  id: number;
}

// Converts JSON strings to/from your types
export class UpdateOneStationInputModel {
  public static toUpdateOneStationInput(json: string): UpdateOneStationInput {
    return JSON.parse(json);
  }

  public static createOneStationInputToJson(
    value: UpdateOneStationInput
  ): string {
    return JSON.stringify(value);
  }
}
