import { Command } from 'commander';
import { add } from './commands/add.js';
import { init } from './commands/init.js';

function main() {
  const program = new Command().name('usmds').description('CLI for adding USMDS components to React Native apps').version('0.1.8');

  program.addCommand(add);
  program.addCommand(init);

  program.parse(process.argv);
}

main();
