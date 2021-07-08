//===================================================================================================================
//Flight booking fullname function

// function getFullName(firstName, surName) {
//     return firstName + surName
// }

// console.log(getFullName("Benjamin", "Hughes"));

// Formal fullname

function getFullName(firstName, surName, useFormalName) {
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

function getFullNameWithSex(firstName, surName, useFormalName, sex) {
    if (sex === "female" && useFormalName === true) {
        console.log(`Lady ${firstName} ${surName}`);
    } else if (sex === "female" && useFormalName === false) {
        console.log(firstName + ` ` + surName);
    } else if (sex === "male" && useFormalName === true) {
        console.log(`Lord ${firstName} ${surName}`);
    } else if (sex === "male" && useFormalName === false) {
        console.log(`${firstName} ${surName}`);
    } else
        console.log("Please put firstname and Surname correctly");
}

getFullNameWithSex("Jiu", "Tak", true, "female");
getFullNameWithSex("Jiu", "Tak", false, "female");
getFullNameWithSex("Jiu", "Tak", true, "male");
getFullNameWithSex("Jiu", "Tak", false, "male");


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
    if (!studentName) {
        return;
    }
    if (studentName === "queen") {
        class07Students.push(studentName);
        console.log(class07Students);
    }
    if (class07Students.length > 6) {
        console.log("Cannot add more students to class 07");
    } else if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class.`);
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
    // do {
    //     console.log("Let us buy more sweets!");
    //     return true
    // }
    // while (amountToSpend > currentAmount) {
    //     return false;
    // }
}

canBuyMoreCandy();