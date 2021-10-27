export interface Match {
  id: number;
  audioId: number;
  stationId: number;
  playedAt?: string;
}

export class MatchModel {
  public static toMatch(json: string): Match {
    return JSON.parse(json);
  }

  public static toJson(value: Match): string {
    return JSON.stringify(value);
  }
}
