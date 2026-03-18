import { analyzeCommand } from "../commands/analyze";
import { generateCommand } from "../commands/analyze";
const command = process.argv[2];

if (command === "analyze"){
    analyzeCommand();
} else  if( command === "generate"){
    generateCommand();
} else {
    console.log("Unknown command");
}