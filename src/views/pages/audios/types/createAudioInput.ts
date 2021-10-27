export interface CreateAudioInput {
  name: string;
  guard: string;
  code?: string;
}

// Converts JSON strings to/from your types
export class CreateAudioInputModel {
  public static toCreateAudioInput(json: string): CreateAudioInput {
    return JSON.parse(json);
  }

  public static createAudioInputToJson(value: CreateAudioInput): string {
    return JSON.stringify(value);
  }
}
