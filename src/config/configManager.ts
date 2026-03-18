import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const CONFIG_DIR = ".docmydb";
const CONFIG_FILE = "config.json";

export class ConfigManager{
    private static getConfigPath(){
        return join(process.cwd(), CONFIG_DIR, CONFIG_FILE);
    }
    static save(config: any){
        const dir = join(CONFIG_DIR, CONFIG_FILE);
        if (!existsSync(dir)){
            mkdirSync(CONFIG_DIR, {recursive: true});
        }
        writeFileSync(this.getConfigPath(), JSON.stringify(config, null, 2));
    }

    static load(){
        const path = this.getConfigPath();
        if (!existsSync(path)){
            throw new Error("No configuration found. Use docmydb connect'");
        }
        return JSON.parse(readFileSync(path, "utf-8"));
    }
}