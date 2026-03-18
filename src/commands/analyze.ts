import { PostgresConnector } from "../connectors/PostgresConnector";
import { SchemaLoader } from "../introspector/schemaLoader";
import { DocumentationService } from "../services/documentationService";
import { DocType } from "../utils/docType";

export async function analyzeCommand() {
  const connectionString = "postgresql://sga:sga123@localhost:5432/sga_db";

  const connector = new PostgresConnector(connectionString);

  await connector.connect();

  const loader = new SchemaLoader(connector.getClient());

  const schema = await loader.loadSchema();

 console.log(schema);

  await connector.disconnect();
}

export async function generateCommand() {
  const connectionString = "postgresql://sga:sga123@localhost:5432/sga_db";
  const connector = new PostgresConnector(connectionString);
  await connector.connect();

  const loader = new SchemaLoader(connector.getClient());

  const schema = await loader.loadSchema();

  const docService = new DocumentationService();
  docService.generateDoc(schema, DocType.MD, "docs/schema.md");

  console.log("\nDocumentation generated successfully.");

  await connector.disconnect();
}
