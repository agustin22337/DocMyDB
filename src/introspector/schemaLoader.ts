import { Schema } from "../model/Schema";
import { Table } from "../model/Table";
import { Column } from "../model/Column";
import { ForeignKey } from "../model/ForeignKey";
import { Client } from "pg";

export class SchemaLoader {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  

  async loadSchema(): Promise<Schema> {
    const schema = new Schema();

    const tables = await this.loadTables();

    for (const table of tables) {
      const columns = await this.loadColumns(table.name);
      table.columns = columns;

      const foreignKeys = await this.loadForeignKeys(table.name);
      table.foreignKeys = foreignKeys;

      schema.tables.push(table);
    }

    return schema;
  }
  private async loadTables(): Promise<Table[]> {
    const result = await this.client.query(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    AND table_type = 'BASE TABLE'
  `);

    return result.rows.map((row) => new Table(row.table_name));
  }
  private async loadColumns(tableName: string): Promise<Column[]> {
    const result = await this.client.query(
      `
    SELECT column_name, data_type, is_nullable
    FROM information_schema.columns
    WHERE table_schema = 'public'
    AND table_name = $1
    `,
      [tableName],
    );

    return result.rows.map(
      (row) =>
        new Column(row.column_name, row.data_type, row.is_nullable === "YES"),
    );
  }

  private async loadForeignKeys(tableName: string): Promise<ForeignKey[]> {
    const result = await this.client.query(
      `
    SELECT
      kcu.column_name,
      ccu.table_name AS referenced_table,
      ccu.column_name AS referenced_column
    FROM information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu
         ON tc.constraint_name = kcu.constraint_name
    JOIN information_schema.constraint_column_usage ccu
         ON ccu.constraint_name = tc.constraint_name
    WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_schema = 'public'
    AND tc.table_name = $1
    `,
      [tableName],
    );

    return result.rows.map(
      (row) =>
        new ForeignKey(
          row.column_name,
          row.referenced_table,
          row.referenced_column,
        ),
    );
  }
}
