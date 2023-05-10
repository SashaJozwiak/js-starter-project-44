import readlineSync from 'readline-sync';

function calcGame() {

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
    console.log()
    const answer = readlineSync.question('Your answer: ');

    if (+answer === answerExpression()) {
      console.log('Correct!', answer, answerExpression())
    } else {
      console.log('Incorrect!', answer, answerExpression())
    }



  }

  for (let i = 0; i < movies; i++) {
    checkAnswer()
  }

  console.log(`Congratulations!`)
}

export default calcGame;
