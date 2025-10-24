import { Command } from "commander";
import { createRequire } from "module";
import { add } from "./commands/add.js";
import { init } from "./commands/init.js";

// Use createRequire to load package.json in ESM
// In published package, package.json is in the same directory as index.js
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

function main() {
  const program = new Command()
    .name("@blen/usmds")
    .description("CLI for adding USMDS components to React Native apps")
    .version(packageJson.version);

  program.addCommand(add);
  program.addCommand(init);

  program.parse(process.argv);
}

main();
