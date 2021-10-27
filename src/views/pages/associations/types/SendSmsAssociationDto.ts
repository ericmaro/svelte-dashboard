export interface SendSmsAssociationDto {
  message: string;
  associationId: number;
  salutation?: boolean;
}

// Converts JSON strings to/from your types
export class SendSmsAssociationDtoModel {
  public static toSendSmsAssociationDto(json: string): SendSmsAssociationDto {
    return JSON.parse(json);
  }

  public static createOneCustomerInputToJson(
    value: SendSmsAssociationDto
  ): string {
    return JSON.stringify(value);
  }
}
