import { Command } from 'commander';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { add } from './commands/add.js';
import { init } from './commands/init.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function main() {
  // Read version from package.json
  const packageJson = JSON.parse(
    readFileSync(join(__dirname, '../package.json'), 'utf-8')
  );

  const program = new Command()
    .name('usmds')
    .description('CLI for adding USMDS components to React Native apps')
    .version(packageJson.version);

  program.addCommand(add);
  program.addCommand(init);

  program.parse(process.argv);
}

main();
