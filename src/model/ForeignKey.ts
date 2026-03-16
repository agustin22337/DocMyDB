export class ForeignKey {
  columnName: string;
  referencedTable: string;
  referencedColumn: string;

  constructor(
    columnName: string,
    referencedTable: string,
    referencedColumn: string,
  ) {
    this.columnName = columnName;
    this.referencedTable = referencedTable;
    this.referencedColumn = referencedColumn;
  }
}
