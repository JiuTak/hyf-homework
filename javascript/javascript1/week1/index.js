/*---------------------------------------------------------------------------------------------*/
// Age - ify(A future age calculator)
yearOfBirth = 1987;
yearFuture = 2045;

age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

/*---------------------------------------------------------------------------------------------*/
// Goodboy - Oldboy(Adog age calculator)
dogYearOfBirth = 2021;
dogYearFuture = 2045;

dogYear = dogYearFuture - dogYearOfBirth;
shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears == true) {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}

/*---------------------------------------------------------------------------------------------*/
// Housey pricey (A house price estimator)
var petersHouseCurrentPay = 2500000;
var juliasHouseCurrentPay = 1000000;


function volumnInMeters(w, d, h) {
    return (w * d * h) * 2.5 * 1000;
}

function gardenSizeInM2(garden) {
    return garden * 300;
}

console.log("Julia's current rent is: " + juliasHouseCurrentPay);

let juliesRightPayment = volumnInMeters(5, 11, 8) + gardenSizeInM2(70);
console.log("Julia's right amount of rent is: " + juliesRightPayment);

if (juliesRightPayment > juliasHouseCurrentPay) {
    console.log("It is good amount to pay compare your place's size Juila!");
} else {
    console.log("JULIa, YOU NEED TO RE-CONSIDER YOUR PLACE");
}

console.log("Peter's current rent is: " + petersHouseCurrentPay);

var petersRightPayment = volumnInMeters(8, 10, 10) + gardenSizeInM2(100);
console.log("Peter's right amount of rent is: " + petersRightPayment);

if (petersRightPayment > petersHouseCurrentPay) {
    console.log("It is good amount to pay compare your place's size Peter!");
} else {
    console.log("PETER, YOU NEED TO RE-CONSIDER YOUR PLACE");
}

/*---------------------------------------------------------------------------------------------*/
// Ez Namey(Startup name generator)
const array = firstWords["Awesome", "Coolll", "Super", "Amazing", "Lovely", "Intelligent", "Gucci", "Best", "Dazzling", "Wonderful"];
const array = secondWords["Corporation", "Firm", "Inc.", "Business", "Enterprise", "Establishment", "Organization", "Company", "Agency", "technology"];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log("The startup: " + startupName + "contains " + startupName.length + "characters");