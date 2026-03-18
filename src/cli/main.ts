import { analyzeCommand } from "../commands/analyze";
import { generateCommand } from "../commands/generate";
import { connectCommand } from "../commands/connect";

const command = process.argv[2];
const args = process.argv.slice(3);

if (command === "analyze") {
    analyzeCommand();

} else if (command === "generate") {
    generateCommand();

} else if (command === "connect") {
    const url = args[0];

    if (!url) {
        console.error("❌ Debes pasar una URL");
        process.exit(1);
    }

    connectCommand(url);

} else {
    console.log("❌ Unknown command");
}