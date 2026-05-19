let date = prompt("What is the day of the week?").toLowerCase();
console.log(date);
if (date == "sábado" || date == "domingo") {
    alert("Great Weekend!");
} else {
    alert("Great week!");
};

///////////////////////////////////////////////////////////////////////////

alert("Welcome to the positive or negative number detector!");
let userNumber = prompt("Write a number:");
console.log(userNumber);
if (userNumber > 0) {
    alert("Your number is a positive one!");
} else if (userNumber < 0) {
    alert("Your number is a negative one!");
} else {
    alert("Your number is a neutral one!");
}; 

///////////////////////////////////////////////////////////////////////////

let userScore = prompt("Write your score:");
console.log(userScore);
if (userScore >= 100) {
    alert("Congratulations! You won!");
} else {
    alert("Try again to win");
};

//////////////////////////////////////////////////////////////////////////

let userBalance = prompt("Write your account balance:");
console.log(userBalance);
alert(`Your account balance is R$${userBalance}`);

//////////////////////////////////////////////////////////////////////////

let userName = prompt("Write your name:");
console.log(userName);
alert(`Your name is: ${userName}`);