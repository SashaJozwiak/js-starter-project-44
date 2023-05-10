import readlineSync from 'readline-sync';
import { currentUserName } from '../cli.js';

function calcGame() {
  const { name } = currentUserName;
  let movies = 2;

  // eslint-disable-next-line no-use-before-define
  checkAnswer();

  function checkAnswer() {
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    const firstOperand = Math.floor(Math.random() * 10);
    const secondOperand = Math.floor(Math.random() * 10);

    const expression = `${firstOperand} ${randomOperator} ${secondOperand}`;

    // eslint-disable-next-line consistent-return
    const answerExpression = () => {
      // eslint-disable-next-line default-case
      switch (randomOperator) {
        case '+':
          return firstOperand + secondOperand;
        case '-':
          return firstOperand - secondOperand;
        case '*':
          return firstOperand * secondOperand;
      }
    };

    console.log('What is the result of the expression?');
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (+answer === answerExpression()) {
      console.log('Correct!');
    } else {
      // console.log('Incorrect!', answer, answerExpression())
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerExpression()}'.`);
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

export default calcGame;
