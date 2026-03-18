import { PostgresConnector } from "../connectors/PostgresConnector";
import { SchemaLoader } from "../introspector/schemaLoader";
import { ConfigManager } from "../config/configManager";
export async function analyzeCommand() {
  const connectionString = ConfigManager.load().databaseUrl;

  const connector = new PostgresConnector(connectionString);

  await connector.connect();

  const loader = new SchemaLoader(connector.getClient());

  const schema = await loader.loadSchema();

 console.log(schema);

  await connector.disconnect();
}


