const prompts = require('prompts');
import chalk from 'chalk';

const questions = [
    {
      type: 'text',
      name: 'name',
      message: chalk.blue('What should the name of your extension be?'),
      initial: 'YourExtension'
    },
    {
      type: 'text',
      name: 'class',
      message: chalk.blue('What should your main class be called?'),
      initial: (prev: string) => prev
    },
    {
      type: 'text',
      name: 'package',
      message: chalk.blue('What should your main package be?'),
      initial: (prev: string) => 'org.bukkitstom.' + prev.toLowerCase()
    },
    {
      type: 'text',
      name: 'author',
      message: chalk.blue('Who is the author of your extension?'),
      initial: 'You'
    },
];

async function main() {
    const response = await prompts(questions)
}
  
main()