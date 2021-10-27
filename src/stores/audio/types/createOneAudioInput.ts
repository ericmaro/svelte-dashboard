import type { CreateAudioInput } from "./createAudioInput";

export interface CreateOneAudioInput {
  audio: CreateAudioInput;
}

// Converts JSON strings to/from your types
export class CreateOneAudioInputModel {
  public static toCreateOneAudioInput(json: string): CreateOneAudioInput {
    return JSON.parse(json);
  }

  public static createOneAudioInputToJson(value: CreateOneAudioInput): string {
    return JSON.stringify(value);
  }
}
