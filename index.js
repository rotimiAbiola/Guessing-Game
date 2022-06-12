let min = 1;
let max = 2;
let points = 1;
let firstStage = 1;
let seqStage = 1;
let range = Number((Math.random() * (max - min) + min).toFixed());
let guessedNum;

let userName = prompt("Enter your Username: ");
  
const welcomeFunc = () => {
  if (firstStage === 1 && seqStage === 1) { 
    console.log(`Welcome ${userName}, you are currently in stage 1`)
  } else {
    console.log(`Congratulations! ${userName}, you guessed it right!`);
    console.log(`You are now promoted to stage ${seqStage}`);
    console.log(`Your point is (${points})`)
  }
}
const guessLoader = () => {
  guessedNum = +prompt(`Guess a number between ${min} and ${max} `);
}

const gameLoaderFunc = () => {
  welcomeFunc();
guessLoader()
}

gameLoaderFunc();

const reviveGame = () => {
    min = 1;
    points = 1;
    max = 2;
    initialStage = 1;
    sequentialStage = 1;
    range = Number((Math.random() * (max - min) + min).toFixed());
    guessedNum = "";
  
     let afterFailed = prompt(`${userName}, would you like to continue playing? Type "y" or "n"`);

  if (afterFailed === "y")  {
    gameLoaderFunc();
    guessingGame();
  } else if (afterFailed === 'n') {
    console.log("Bye!!")
  } else {
    console.log(`INVALID ENTRY!!! `);
  }
}

const guessingGame = () => {
  if (guessedNum > max) {
    console.log("Your input is bigger than your maximum range");
    gameLoaderFunc()
    guessingGame()
  } else if (guessedNum < min) {
    console.log("Your input is smaller than your minimum range");
    gameLoaderFunc()
    guessingGame()
  } else {
    while (guessedNum === range) {
    min;
    max++;
    points++;
    seqStage = seqStage + 1;
    range = Number((Math.random() * (max - min) + min).toFixed());
    gameLoaderFunc()
  }
  
  console.log(`Oops, the correct answer is ${range}.`);

  reviveGame();
    process.exitCode = 1
  }
}

guessingGame();