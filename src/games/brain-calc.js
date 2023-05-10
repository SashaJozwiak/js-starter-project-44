import readlineSync from 'readline-sync';
import { currentUserName } from '../cli.js';

function calcGame() {
  const { name } = currentUserName;
  let movies = 2;

  checkAnswer()

  function checkAnswer() {

    const operators = ['+', '-', '*'];
    let randomOperator = operators[Math.floor(Math.random() * 3)]
    let firstOperand = Math.floor(Math.random() * 10)
    let secondOperand = Math.floor(Math.random() * 10)

    let expression = `${firstOperand} ${randomOperator} ${secondOperand}`

    let answerExpression = () => {
      switch (randomOperator) {
        case '+':
          return firstOperand + secondOperand
        case '-':
          return firstOperand - secondOperand
        case '*':
          return firstOperand * secondOperand
      }
    }


    console.log('What is the result of the expression?')
    console.log(`Question: ${expression}`)
    const answer = readlineSync.question('Your answer: ');

    if (+answer === answerExpression()) {
      console.log('Correct!')
    } else {
      //console.log('Incorrect!', answer, answerExpression())
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerExpression()}'.`)
      console.log(`Let's try again, ${name}!`)
      movies = -1;
      return;
    }

  }

  for (let i = 0; i < movies; i++) {
    checkAnswer()
  }

  if (movies != -1) {
    console.log(`Congratulations, ${name}!`)
  }
}

export default calcGame;
