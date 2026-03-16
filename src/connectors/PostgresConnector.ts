import { Client } from "pg";

export class PostgresConnector{
    private client: Client;

    constructor(connectionString: string){
        this.client = new Client({
            connectionString: connectionString,
        })
    }
    getClient() : Client{
        return this.client;
    }
    async connect(){
        this.client.connect();
    }

    async disconnect(){
        this.client.end();
    }
}