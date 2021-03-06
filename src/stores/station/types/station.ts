export interface Station {
  id: number;
  name: string;
  streamUrl: string;
  isYouTube: boolean;
isListening: boolean;
}

export class StationModel {
  public static toStation(json: string): Station {
    return JSON.parse(json);
  }

  public static toJson(value: Station): string {
    return JSON.stringify(value);
  }
}
