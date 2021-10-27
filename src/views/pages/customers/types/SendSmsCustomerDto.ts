export interface SendSmsCustomerDto {
  message: string;
  recipientIds: string[];
}

// Converts JSON strings to/from your types
export class SendSmsCustomerDtoModel {
  public static toSendSmsCustomerDto(json: string): SendSmsCustomerDto {
    return JSON.parse(json);
  }

  public static createOneCustomerInputToJson(
    value: SendSmsCustomerDto
  ): string {
    return JSON.stringify(value);
  }
}
