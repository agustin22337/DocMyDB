import { ConfigManager } from "../config/configManager";

export function connectCommand(url : string){
    if (!url){
        console.log("You must provide an url");
        return;
    }
    ConfigManager.save({
        databaseUrl: url
    })
    console.log("Database configured succesfully!");
}