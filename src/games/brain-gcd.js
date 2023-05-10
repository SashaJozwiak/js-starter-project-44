import readlineSync from 'readline-sync';
import { currentUserName } from '../cli.js';

function gcdGame() {
  const { name } = currentUserName;
  let movies = 2;

  checkAnswer()

  function checkAnswer() {

    let firstOperand = Math.floor(Math.random() * 100) + 1
    let secondOperand = Math.floor(Math.random() * 100) + 1

    const getGcd = (a, b) => {
      if (!b) {
        return a;
      }

      return getGcd(b, a % b);
    }
    console.log('Find the greatest common divisor of given numbers.')

    console.log(`Question: ${firstOperand} ${secondOperand}`)
    const answer = readlineSync.question('Your answer: ');

    if (getGcd(firstOperand, secondOperand) === +answer) {
      console.log('Correct!')
    } else {
      //console.log('Incorrect!')
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getGcd(firstOperand, secondOperand)}'.`)
      console.log(`Let's try again, ${name}!`)
      movies = -1
    }
  }

  for (let i = 0; i < movies; i++) {
    checkAnswer()
  }

  if (movies != -1) {
    console.log(`Congratulations, ${name}!`)
  }

}

export default gcdGame;
