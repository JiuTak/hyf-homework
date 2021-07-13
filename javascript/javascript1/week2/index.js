//===================================================================================================================
//Flight booking fullname function

function getFullName(firstName, surName) {
    return firstName + surName
}

console.log(getFullName("Benjamin", "Hughes"));

// Formal fullname

function getFormalFullName(firstName, surName, useFormalName) {
    if (useFormalName === true) {
        console.log(`Lord ${firstName} ${surName}`);
    } else if (useFormalName === false) {
        console.log(firstName + " " + surName);
    } else
        console.log("Need to put Firstname and Surname.")

}

getFullName("Benjamin", "Hughes", true); // when using formal name
getFullName("Benjamin", "Hughes", false); // without formal name


// if is female?

function getFullNameWithSex(firstName, surName, useFormalName, isFemale) {
    if (isFemale === "female" || isFemale === true && useFormalName === true) {
        console.log(`Lady ${firstName} ${surName}`);
    } else if (isFemale === "female" || isFemale === true && useFormalName === false) {
        console.log(firstName + ` ` + surName);
    } else if (isFemale === "male" || isFemale === false && useFormalName === true) {
        console.log(`Lord ${firstName} ${surName}`);
    } else if (isFemale === "male" || isFemale === false && useFormalName === false) {
        console.log(`${firstName} ${surName}`);
    } else
        console.log("Please put firstname and Surname correctly");
}

getFullNameWithSex("Jiu", "Tak", true, true);
getFullNameWithSex("Jiu", "Tak", false, true);
getFullNameWithSex("Jiu", "Tak", true, false);
getFullNameWithSex("Jiu", "Tak", false, false);


//===================================================================================================================
// Event application


const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function getEventWeekday(days) {
    const today = new Date();
    // console.log(today)
    const dayNumber = (today.getDay() + parseInt(days)) % weekDays.length;

    console.log(weekDays[dayNumber])
}

// With todays weekday a tuesday
getEventWeekday(9); // Logs out "Thursday"

// With todays weekday a Friday
getEventWeekday(1); // Logs out "Sunday"


//===================================================================================================================
// Weather wear

const myClothes = {
    nice: ["pants", " slacks", " shirts", " t-shirts", " sneakers", " scarf"],
    cold: ["muffler", " thicker pants", " long sleeve", " jumper", " coat", " hunter boots"],
    warm: ["shorts", " sleeveless", " birkenstock", " shades"],
}

function whatToWear(temperature) {
    if (temperature >= 20) {
        console.log(`Today is temperature is ${temperature} so it could be warm or hot ` + myClothes.warm);
    } else if (10 < temperature && temperature < 20) {
        console.log(`Today is awesome weather <3 with ${temperature} celcius, so wear ` + myClothes.nice);
    } else if (temperature <= 10) {
        console.log("Today will be bit chilly, better to wear more sis!" + myClothes.cold);
    }
}

whatToWear(18);
whatToWear(2);
whatToWear(30);


//===================================================================================================================
// Student Manager



const class07Students = [];

function addStudentToClass(studentName) {
    if (class07Students.includes(studentName)) { //check if the student name is duplicated or not
        console.log(`Student ${studentName} is already in the class.`);
    }
    if (!studentName) { // check if student name is not null
        return;
    }
    if (studentName === "queen") { //check if Qeen is gonna join the class
        class07Students.push(studentName);
        console.log(class07Students);
    } else if (class07Students.length > 6) {
        console.log("Cannot add more students to class 07");

    } else {
        class07Students.push(studentName);
        console.log(class07Students);
    }
}

function getNumberOfStudents() {
    console.log(class07Students.length);
}


addStudentToClass("Jiu");
addStudentToClass("student1");
addStudentToClass("student2");
addStudentToClass("student3");
addStudentToClass("student4");
addStudentToClass("Jiu");
addStudentToClass("student5");
addStudentToClass("queen");
addStudentToClass("student6");

getNumberOfStudents()



//===================================================================================================================
// Candy helper optional

const boughtCandyPrices = [];
const candyPrice = {
    Sweet: 0.5,
    Chocolate: 0.7,
    Toffee: 1.1,
    Chewinggum: 0.03,
}

const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    do {
        boughtCandyPrices.push(candyPrice[candyType] * weight);
        console.log(boughtCandyPrices);
    }
    while (canBuyMoreCandy == true) {}
}

addCandy("Toffee", 20);
addCandy("Chocolate", 10);
addCandy("Sweet", 10);


function canBuyMoreCandy() { //returns a boolean if the user can buy more candy using the "boughtCandy" array
    // let currentAmount = 0;
    // for (let i in boughtCandyPrices) {
    //     currentAmount += boughtCandyPrices[i];
    // }
    const currentAmount = boughtCandyPrices.reduce((a, b) => a + b, 0);


    if (currentAmount > amountToSpend) {
        console.log("Enough candy for you!");
        return false
    } else {
        console.log("You can buy more, so please do!");
        return true
    }
}

canBuyMoreCandy();