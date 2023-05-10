import readlineSync from 'readline-sync';
import { currentUserName } from '../cli.js';

function primeGame() {
  const { name } = currentUserName;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let movies = 2;

  // eslint-disable-next-line no-use-before-define
  checkAnswer();

  function checkAnswer() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = '';

    const isPrime = (num) => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    };
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (isPrime(randomNum)) {
      correctAnswer = 'yes';
      if (answer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        movies = -1;
      }
    } else {
      correctAnswer = 'no';
      if (answer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        movies = -1;
      }
    }
  }

  for (let i = 0; i < movies; i += 1) {
    checkAnswer();
  }

  if (movies !== -1) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default primeGame;
