import readlineSync from 'readline-sync';
import { currentUserName } from '../cli.js';

function evenGame() {

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let movies = 2;

  checkAnswer()

  function checkAnswer() {
    const randomNum = Math.floor(Math.random() * 100)
    const correctAnswer = () => randomNum % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`)
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer() === answer) {
      console.log('Correct!')
    } else {
      console.log('Incorrect!')
      movies = 0;
    }
  }

  for (let i = 0; i < movies; i++) {
    checkAnswer()
  }
  const { name } = currentUserName
  console.log(`Congratulations, ${name}!`)

}

export default evenGame;
