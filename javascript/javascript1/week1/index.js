/*---------------------------------------------------------------------------------------------*/
// Age - ify(A future age calculator)
const yearOfBirth = 1987;
const yearFuture = 2045;

const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}`);


/*---------------------------------------------------------------------------------------------*/
// Goodboy - Oldboy(Adog age calculator)
const dogYearOfBirth = 2021;
const dogYearFuture = 2045;

const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears == true) {
    console.log(`\nYour dog will be ${dogYear}  human years old in ${dogYearFuture}`);
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

console.log(`\nJulia's current rent is: ${juliasHouseCurrentPay}`);

let juliesRightPayment = volumnInMeters(5, 11, 8) + gardenSizeInM2(70);
console.log("Julia's right amount of rent is: " + `${juliesRightPayment}`);

if (juliesRightPayment > juliasHouseCurrentPay) {
    console.log("It is good amount to pay compare your place's size Juila!");
} else {
    console.log("JULIA, YOU NEED TO RE-CONSIDER YOUR PLACE");
}

console.log(`\nPeter 's current rent is: ${petersHouseCurrentPay}`);

var petersRightPayment = volumnInMeters(8, 10, 10) + gardenSizeInM2(100);
console.log(`Peter 's right amount of rent is: ${petersRightPayment}`);

if (petersRightPayment > petersHouseCurrentPay) {
    console.log("It is good amount to pay compare your place's size Peter!");
} else {
    console.log("PETER, YOU NEED TO RE-CONSIDER YOUR PLACE");
}

/*---------------------------------------------------------------------------------------------*/
// Ez Namey(Startup name generator)
const firstWords = ["Awesome", "Coolll", "Super", "Amazing", "Lovely", "Intelligent", "Gucci", "Best", "Dazzling", "Wonderful"];
const secondWords = ["Corporation", "Firm", "Inc.", "Business", "Enterprise", "Establishment", "Organization", "Company", "Agency", "technology"];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log("\nThe startup: " + `${ startupName }` + " contains " + startupName.length + " characters.");