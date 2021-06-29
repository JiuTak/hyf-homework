// IF SENTENCES 
// *************************************************************************************************** //
const balance = 1000;

if (balance <= 0) {
    console.log("Please deposit some money!");
} else if (balance < 0 || balance <= 1000) {
    console.log("your balance is looking okay");
} else if (balance <= 1000 || balance <= 3000) {
    console.log("your balance is looking good");
} else if (balance <= 3000 || balance <= 10000) {
    console.log("your balance is fantastic");
} else if (10000 <= balance) {
    console.log("your balance is AMAZING!");
}


// FUNCTION //
// *************************************************************************************************** //

let radius = 10;

function getCircleArea() {
    circleArea = 3.14 * radius ** 2;
    console.log(circleArea);
}
getCircleArea();

let celcius = 10;

function celciusToFahreneit() {
    fahrenheit = celcius / 5 * 9 + 32;
    console.log(fahrenheit);
}

celciusToFahreneit();


// SCOPE //
// *************************************************************************************************** //

const global = 'global';

function scopeTest() {
    const functionScope = 'functionScope';
    console.log(functionScope);
    console.log(global);

    function tester() {
        console.log(global);

        const testerVariable = 'testerVariable';
        console.log(testerVariable);
    }

    tester();
}

scopeTest();


// FOR LOOP //
// *************************************************************************************************** //

//simple for loop
for (let index = 74; index < 99; index++) {
    console.log(index);
}

//for loop in a function


function forLoop(stringToLog, numberOfTimesToLog) {
    // const logString = ('hello', 3);
    for (let i = 0; i < numberOfTimesToLog; i++) {
        console.log(stringToLog);
    }
}
forLoop('hello', 3);



// SEND EMAILS //
// *************************************************************************************************** //

const petersFormat = ("benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com");

// This function emulates sending emails to receipients
function sendEmailTo(recepient) {

    recepient = petersFormat.split("|")
        // But really it only logs out a string
    console.log('email sent to ' + recepient);
}
sendEmailTo();

//change branches