import readlineSync from 'readline-sync';

export let currentUserName = '';

export default function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'John Doe',
  });
  console.log(`Hello, ${userName}`);
  currentUserName = userName;
}
