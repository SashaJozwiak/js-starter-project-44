import readlineSync from 'readline-sync';

export const currentUserName = { name: '' };

export default function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'John Doe',
  });
  currentUserName.name = userName;
  console.log(`Hello, ${userName}, ${currentUserName.name}`);
}
