import readlineSync from 'readline-sync';
import { currentUserName } from '../cli.js';

function progressionGame() {
  const { name } = currentUserName;

  console.log('What number is missing in the progression?');
  let movies = 2;
  // eslint-disable-next-line no-use-before-define
  checkAnswer();

  function checkAnswer() {
    const startPoint = Math.floor(Math.random() * 50);
    const step = Math.floor(Math.random() * 10 + 1);

    let point = startPoint;
    const progressionArr = [startPoint];

    for (let i = 0; i < 9; i += 1) {
      progressionArr.push(point + step);
      point = progressionArr[progressionArr.length - 1];
    }

    const correctAnswer = progressionArr[step - 1];
    progressionArr[step - 1] = '..';

    console.log(`Question: ${progressionArr.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (+answer === correctAnswer) {
      console.log('Correct!');
    } else {
      // console.log('Incorrect! Correct answer: ' + correctAnswer)
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
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

export default progressionGame;
