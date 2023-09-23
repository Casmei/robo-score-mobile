import { Match } from "./Match.interface";

export interface Group {
  name: string;
  id: number;
  table: TableData;
  matches: Match[];
}
