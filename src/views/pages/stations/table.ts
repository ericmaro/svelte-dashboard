import { TableColumn } from "@/components/master-table/types/list";

export const dataColumns: TableColumn[] = [
  { name: "name", title: "Name" },
  { name: "streamUrl", title: "Stream Url", widget: "audio" },
  { name: "isListening", title: "is Listening" },
];
