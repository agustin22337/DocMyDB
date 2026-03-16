import { analyzeComand } from "../commands/analyze";

const command = process.argv[2];

if (command === "analyze"){
    analyzeComand();
} else {
    console.log("Unknown command");
}