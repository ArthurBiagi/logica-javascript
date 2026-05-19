alert('Welcome to the Secret Number Game');
let MaxNumber = 1000;
let SecretNumber = parseInt(Math.random() * MaxNumber + 1);
let Guess;
let Counter = 0;
console.log(SecretNumber);
do {
    Guess = parseInt(prompt(`Pick a number between 1 and ${MaxNumber}`));
    console.log(Guess);
    Counter++

    if (SecretNumber == Guess) {
        console.log("You guessed it!");
        break;
    } else if (SecretNumber < Guess) {
        alert(`Not yet! The secret number is lower than ${Guess}`);
    } else if (SecretNumber > Guess) {
        alert(`Not yet! The secret number is higher than ${Guess}`);
    }
} while (Guess != SecretNumber);
let wordGuess = Counter > 1 ? 'guesses' : 'guess';
alert(`That is it! You found the secret number ${SecretNumber} in ${Counter} guesses!`);


