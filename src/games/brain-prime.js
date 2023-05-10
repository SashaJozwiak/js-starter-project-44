import readlineSync from 'readline-sync'

function primeGame() {

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  let movies = 2;

  checkAnswer()

  function checkAnswer() {

    const randomNum = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = '';

    const isPrime = num => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
    console.log(`Question: ${randomNum}`)
    const answer = readlineSync.question('Your answer: ');

    if (isPrime(randomNum)) {
      correctAnswer = 'yes';
      answer === correctAnswer ? console.log('Correct!')
        : console.log('Incorrect!')
    } else {
      correctAnswer = 'no';
      answer === correctAnswer ? console.log('Correct!')
        : console.log('Incorrect!')
    }
  }

  for (let i = 0; i < movies; i++) {
    checkAnswer()
  }

  console.log(`Congratulations!`)

}


export default primeGame;
