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

    //     recepient = petersFormat.split("|")
    //         // But really it only logs out a string
    //     console.log('email sent to ' + recepient);
    // }
    // sendEmailTo();







    // //exercises from FreeCodeCamp

    // function multiplyAll(arr) {
    //     var product = 1;
    //     // Only change code below this line
    //     for (var i = 0; i < arr.length; i++) {
    //         for (var j = 0; j < arr[i].length; j++) {
    //             product *= arr[i][j]
    //             debugger;
    //             console.log(product);
    //         }
    //     }

    //     // Only change code above this line
    //     return product;
    // }
    // multiplyAll([
    //     [1],
    //     [2],
    //     [3]
    // ]);

    // multiplyAll([
    //     [1, 2],
    //     [3, 4],
    //     [5, 6, 7]
    // ]);

    // multiplyAll([
    //     [5, 1],
    //     [0.2, 4, 0.5],
    //     [3, 9]
    // ]);



    // function sum(arr, n) {
    //     // Only change code below this line
    //     if (n <= 0) {
    //         return 0;
    //     } else {
    //         debugger;
    //         console.log(sum(arr, n - 1) + arr[n - 1]);
    //     }
    //     // Only change code above this line
    // }
    // sum([2, 3, 4], 1);
    // sum([2, 3, 4, 5], 3);



    // function getRandomIntInclusive(min, max) {
    //     min = Math.ceil(min);
    //     console.log(`min is: ${min}`);
    //     max = Math.floor(max);
    //     console.log(`max is: ${max}`);
    //     return console.log(Math.floor(Math.random() * (max - min + 1) + min)); //The maximum is inclusive and the minimum is inclusive
    // }

    // getRandomIntInclusive(2, 15);


    // function countup(n) {
    //     if (n < 1) {
    //         return [];
    //     } else {
    //         const countArray = countup(n - 1);
    //         countArray.push(n);
    //         debugger
    //         return countArray;
    //     }
    // }
    // console.log(countup(5));


    // // Only change code below this line
    // function countdown(n) {
    //     if (n < 1) {
    //         return [];
    //     } else {
    //         const countArray = countdown(n - 1);
    //         countArray.unshift(n);
    //         return countArray;
    //     }
    // }
    // console.log(countdown(5));
    // // Only change code above this line



    // function rangeOfNumbers(startNum, endNum) {
    //     if (endNum - startNum === 0) {
    //         debugger
    //         return [startNum];
    //     } else {
    //         debugger
    //         const numberArray = rangeOfNumbers(startNum, endNum - 1);
    //         numberArray.push(endNum);
    //         debugger
    //         console.log(numberArray);

    //         return numberArray;
    //     }
    // }

    // rangeOfNumbers(1, 5);



    let styles = ["Jazz", "Blues"];

    styles.push("Rock-n-Roll");

    styles[Math.floor((styles.length - 1) / 2)] = "Classics";

    console.log(styles);

    styles.unshift("Rap", "Reggae");
    alert(styles);

    console.log(styles);