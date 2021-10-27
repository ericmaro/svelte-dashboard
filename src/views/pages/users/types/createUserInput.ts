export interface CreateUserInput {
  email: string;
  password: string;
  active?: boolean;
  firstName: string;
  middleName?: string;
  lastName: string;
  phone?: string;
  gender?: string;
  dateOfBirth?: string;
  residenceID?: string;
  workID?: string;
  address?: string;
  countryId?: number;
  regionId?: number;
}

// Converts JSON strings to/from your types
export class CreateUserInputModel {
  public static toCreateUserInput(json: string): CreateUserInput {
    return JSON.parse(json);
  }

  public static createUserInputToJson(value: CreateUserInput): string {
    return JSON.stringify(value);
  }
}
