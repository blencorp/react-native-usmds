import { Command } from 'commander';
import { add } from './commands/add.js';
import { init } from './commands/init.js';

const program = new Command().name('usmds').description('CLI for adding USMDS components to React Native apps').version('0.1.0');

program.addCommand(add);
program.addCommand(init);

program.parse();
