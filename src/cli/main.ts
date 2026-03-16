import { analyzeCommand } from "../commands/analyze";

const command = process.argv[2];

if (command === "analyze"){
    analyzeCommand();
} else {
    console.log("Unknown command");
}