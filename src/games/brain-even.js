import readlineSync from 'readline-sync';
import { currentUserName } from '../cli.js';

function evenGame() {
  const { name } = currentUserName;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let movies = 2;

  // eslint-disable-next-line no-use-before-define
  checkAnswer();

  function checkAnswer() {
    const randomNum = Math.floor(Math.random() * 100);
    const correctAnswer = () => (randomNum % 2 === 0 ? 'yes' : 'no');
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer() === answer) {
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.`);
      console.log(`Let's try again, ${name}!`);
      movies = -1;
    }
  }

  for (let i = 0; i < movies; i += 1) {
    checkAnswer();
  }
  if (movies !== -1) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default evenGame;
