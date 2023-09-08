import chalk from 'chalk';
import prompts from 'prompts';

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'What should the name of your extension be?',
    initial: 'YourExtension'
  },
  {
    type: 'text',
    name: 'class',
    message: 'What should your main class be called?',
    initial: prev => prev
  },
  {
    type: 'text',
    name: 'package',
    message: 'What should your main package be?',
    initial: prev => 'org.bukkitstom.' + prev.toLowerCase()
  },
  {
    type: 'text',
    name: 'author',
    message: 'Who is the author of your extension?',
    initial: 'You'
  },
];

async function main() {
  const response = await prompts(questions)
}

main()