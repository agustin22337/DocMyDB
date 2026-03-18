import { PostgresConnector } from "../connectors/PostgresConnector";
import { SchemaLoader } from "../introspector/schemaLoader";
import { DocumentationService } from "../services/documentationService";
import { DocType } from "../utils/docType";
import { ConfigManager } from "../config/configManager";
export async function generateCommand() {
  const config = ConfigManager.load();
  const connectionString = config.databaseUrl;
  const connector = new PostgresConnector(connectionString);
  await connector.connect();

  const loader = new SchemaLoader(connector.getClient());

  const schema = await loader.loadSchema();

  const docService = new DocumentationService();
  docService.generateDoc(schema, DocType.MD, "docs/schema.md");

  console.log("\nDocumentation generated successfully.");

  await connector.disconnect();
}
