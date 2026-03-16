import { Schema } from "../model/Schema";
export class MarkdownGenerator {
  generate(schema: Schema): string {
    if (!schema) {
      throw new Error("Schema is undefined");
    }

    let markdown = `# Database Schema\n\n`;

    schema.tables.forEach((table) => {
      markdown += `## ${table.name}\n\n`;

      markdown += `| Column | Type | Nullable |\n`;
      markdown += `|--------|------|----------|\n`;

      table.columns.forEach((column) => {
        markdown += `| ${column.name} | ${column.type} | ${column.nullable ? "YES" : "NO"} |\n`;
      });

      markdown += `\n`;

      if (table.foreignKeys.length > 0) {
        markdown += `### Foreign Keys\n\n`;

        table.foreignKeys.forEach((fk) => {
          markdown += `- ${fk.columnName} → ${fk.referencedTable}.${fk.referencedColumn}\n`;
        });

        markdown += `\n`;
      }
    });

    return markdown;
  }
}
