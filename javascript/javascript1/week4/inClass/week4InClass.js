/*
Fizz buzz
This is a classic programming task.

Create a function that prints the numbers from 1 to 100. 
But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz.
For numbers which are multiples of both three and five print FizzBuzz.

When that works. Make the two number for multiples into parameters. So it can be called like this:

fizzBuzz(4, 12);
*/


// function fizzBuzz(){
//     for (let i = 1; i < 101; i++){
//         if (i % 15 === 0 ) {
//             console.log("FizzBuzz")
//         } else if (i % 3 === 0 ) {
//             console.log("Fizz")
//         } else if (i % 5 === 0 ) {
//             console.log("Buzz")
//         }
//         else
//         console.log(i);
//     }
// }

// fizzBuzz(4,12)


// function fizzBuzz2(num) {
//     let output = '';
//     if (num % 3 === 0) {
//         output += 'Fizz';
//     }
//     if (num % 5 === 0 ) {
//         output += 'Buzz';        
//     }

//     return output || num;
// }

// console.log(fizzBuzz2(2));


//***************************************************************************************** */
//*************************** Buil a sentiment analyzer************************************ */
//***************************************************************************************** */

// const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

// console.log(sentimentScoreObject); 
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/


function getSentimentScore(inputText){
    let score = 0;
    const positiveWords = ['happy', 'awesome'];
    const negativeWords = ['sad', 'bad'];

    const inputTextSplit = inputText.split(' ');

    for (let i = 0; i < inputTextSplit.length; i++) {
        for (let j = 0; j < positiveWords.length; j++) {
            if (inputTextSplit[i] === positiveWords[j]) {
                score += 1;
            }

        } 
        for (let j = 0; j < negativeWords.length; j++) {
            if (inputTextSplit[i] === negativeWords[j]) {
                score -= 1;
            }

        }
    }
}

/*
function factorial(num) {
    let result = 1;
    if (num === 0 ) {
        return 1;
    }

    for (let i = 0; i < num; i--) {
        result = result * i
    }
    return result;
}

console.log(factorial(5));


function factorial(num) {
    let result = 1;
    if (num === 0 ) {
        return 1;
    }

    return num * factorial(num -1);
}

console.log(factorial(5));

*/


//Fibonacci sequence
const i;
let fib = [];

fib [0] = 0;
fib [1] = 1;
for (let i = 2; i < 50; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}



//Fibonacci sequence(different way to do)
function fib(num) {
    if (num === 0) {
        return 0;
    }

    if (num === 1) {
        return 1;
    }

    return fib(num - 1) + fib(num - 2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));



function isPalindrom(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrom("racecar"))
console.log(isPalindrom("test"))