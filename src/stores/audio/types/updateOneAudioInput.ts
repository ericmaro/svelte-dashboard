import type { CreateAudioInput } from "./createAudioInput";

export interface UpdateOneAudioInput {
  update: CreateAudioInput;
  id: number;
}

// Converts JSON strings to/from your types
export class UpdateOneAudioInputModel {
  public static toUpdateOneAudioInput(json: string): UpdateOneAudioInput {
    return JSON.parse(json);
  }

  public static createOneAudioInputToJson(value: UpdateOneAudioInput): string {
    return JSON.stringify(value);
  }
}
