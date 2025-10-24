import chalk from "chalk";

export const logger = {
  info: (message: string) => console.log(chalk.blue(message)),
  success: (message: string) => console.log(chalk.green(message)),
  warn: (message: string) => console.log(chalk.yellow(message)),
  error: (message: string | Error) => {
    const errorMessage = message instanceof Error ? message.message : message;
    console.error(chalk.red(errorMessage));
  },
};
