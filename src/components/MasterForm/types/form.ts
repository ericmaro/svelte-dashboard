import type { FieldGroup } from "./field.group";
export interface Form {
  submitButtonText?: string;
  editButtonText?: string;
  grid?: number;
  submitButtonClass?: string;
  groups: FieldGroup[];
}
