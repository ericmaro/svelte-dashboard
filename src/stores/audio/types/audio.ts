export interface Audio {
  id: number;
  name: string;
  key: string;
  location?: string;
}

export class AudioModel {
  public static toAudio(json: string): Audio {
    return JSON.parse(json);
  }

  public static toJson(value: Audio): string {
    return JSON.stringify(value);
  }
}
