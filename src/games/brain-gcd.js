import readlineSync from 'readline-sync';


function gcdGame() {

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

    console.log(`Question: ${firstOperand}, ${secondOperand}`)
    const answer = readlineSync.question('Your answer: ');

    if (getGcd(firstOperand, secondOperand) === +answer) {
      console.log('Correct!')
    } else {
      console.log('Incorrect!')
    }
  }

  for (let i = 0; i < movies; i++) {
    checkAnswer()
  }

  console.log(`Congratulations!`)

}

export default gcdGame;
