import { ForeignKey } from "./ForeignKey";
import { Column } from "./Column";
// TODO: make distinction between PK and other atributes
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