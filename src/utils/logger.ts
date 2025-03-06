import chalk from 'chalk';

export const logger = {
  info: (message: string): void => {
    // Using chalk.blue is allowed since we include 'info' in the allowed console methods
    console.info(chalk.blue(`ℹ ${message}`));
  },
  success: (message: string): void => {
    // Change to info which is allowed
    console.info(chalk.green(`✓ ${message}`));
  },
  warning: (message: string): void => {
    // Using warn is explicitly allowed
    console.warn(chalk.yellow(`⚠ ${message}`));
  },
  error: (message: string): void => {
    // Using error is explicitly allowed
    console.error(chalk.red(`✗ ${message}`));
  },
  section: (message: string): void => {
    // Fix template concatenation
    console.info(`${chalk.cyan('━'.repeat(50))}`);
    console.info(chalk.cyan.bold(`   ${message}`));
    // Fix template concatenation
    console.info(`${chalk.cyan('━'.repeat(50))}\n`);
  },
};
