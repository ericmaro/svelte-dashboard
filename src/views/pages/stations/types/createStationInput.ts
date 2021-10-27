export interface CreateStationInput {
  name: string;
  guard: string;
  code?: string;
}

// Converts JSON strings to/from your types
export class CreateStationInputModel {
  public static toCreateStationInput(json: string): CreateStationInput {
    return JSON.parse(json);
  }

  public static createStationInputToJson(value: CreateStationInput): string {
    return JSON.stringify(value);
  }
}
