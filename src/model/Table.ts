import { ForeignKey } from "./ForeignKey";
import { Column } from "./Column";

export class Table{
    name: string;
    columns: Column[];
    foreignKeys: ForeignKey[];
    constructor(name: string) {
    this.name = name
    this.columns = []
    this.foreignKeys = []
  }
}