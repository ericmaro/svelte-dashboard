/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Field {
  value: number | string | number[] | string[];
  title?: string;
  name: string;
  description?: string;
  label?: string;
  type:
    | "text"
    | "number"
    | "password"
    | "search"
    | "textArea"
    | "checkBox"
    | "radio"
    | "select"
    | "date"
    | "dateRange"
    | "array"
    | "file";
  children?: Field[];
  rows?: any;
  iconName?: string;
  numericValue?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  validationMessage?: string;
  isRequired?: boolean;
  disabled?: boolean;
  isValid?: boolean;
  confirmField?: string,
  span?: number;
  options?: {
    value: number | boolean | string;
    label: string;
    
  }[];
}
