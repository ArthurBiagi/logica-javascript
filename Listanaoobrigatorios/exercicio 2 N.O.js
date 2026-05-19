let counter = 1;
let listNumber = " ";
while(counter <= 10){
//se eu quisesse usar != no while, teria que definir o contador em 0//
    let userNumber = prompt("Write a number:");
    listNumber = listNumber + userNumber;

    if(counter < 10){
    listNumber = listNumber + userNumber + ", ";
    };

    console.log(userNumber);
    counter ++;
};
alert(`The inputted numbers were ${listNumber} `);

/////////////////////////////////////////////////////////////////////////////////////////////////////////


let counter = 10;
let listNumber = " ";
while(counter >= 0){

    let userNumber = prompt("Write a number:");
    listNumber = listNumber + userNumber;

    if(counter > 0){
    listNumber = listNumber + userNumber + ", ";
    };

    console.log(userNumber);
    counter --;
};
alert(`The inputted numbers were ${listNumber} `);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

let MaxCounter = prompt("Type a number to start the countdown:");
let Counter = MaxCounter;

while (Counter >= 0) {
    console.log(Counter);
    Counter--
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

let finishCounter = prompt("Type a number to finish the countdown:");
let Counter = 0;

while (Counter <= finishCounter) {
    console.log(Counter);
    Counter++
};