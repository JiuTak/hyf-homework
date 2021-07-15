// ***************************************************************************************************************************************
//                                                      Item array removal
// ***************************************************************************************************************************************
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
names.splice(names.indexOf(nameToRemove), 1);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']



// ***************************************************************************************************************************************
//                                                      When will we be there??
// ***************************************************************************************************************************************

/*
Write a function where you specify your speed in km/h and how far you have to go in km. The function has to return the time it will take to arrive at your destination.
The time should be formatted like this: 3 hours and 34 minutes.

Hint: For formatting your best friend is Google!

*/

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function whenWillWeBeThere() {
    const estimatedTime = travelInformation.destinationDistance / travelInformation.speed;
    let hours = Math.floor(estimatedTime);
    let minutes = Math.floor((estimatedTime % 1) * 60);

    return `${hours} hours and ${minutes} minutes.`
}

const travelTime = whenWillWeBeThere(travelInformation);

console.log((travelTime)); // 8 hours and 38 minutes


whenWillWeBeThere();



// ***************************************************************************************************************************************
//                                                      Series duration of my life
// ***************************************************************************************************************************************

const seriesDurations = [{
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];

//adding my favorite series.
seriesDurations.push({
    title: "Parks and Recreation",
    days: 1,
    hours: 21,
    minutes: 50,
})

function logOutSeriesText() {
    // try to change all 'time' into sec.
    const minutesInSeconds = 60;
    const hoursInSeconds = 3600;
    const daysInSeconds = 86400;
    const yearsInSeconds = 31536000;
    let sumOfTheTotalTime = 0;

    for (let i = 0; i < seriesDurations.length; i++) {
        let currentDuration = 0;
        let averageLifeSpan = 80 * yearsInSeconds;

        currentDuration += (seriesDurations[i].minutes * minutesInSeconds);
        currentDuration += (seriesDurations[i].hours * hoursInSeconds);
        currentDuration += (seriesDurations[i].days * daysInSeconds);

        timeWastedInPercentage = (currentDuration / averageLifeSpan) * 100;

        console.log(`${seriesDurations[i].title} took ${parseFloat(timeWastedInPercentage).toFixed(4)}% of my life`);
        sumOfTheTotalTime += timeWastedInPercentage;
    }

    console.log(`\nIn total that is ${parseFloat(sumOfTheTotalTime).toFixed(4)}% of my life`);
}
logOutSeriesText(); // logs out the text found above


// ***************************************************************************************************************************************
//                                                       NOnoN0nOYes (Note taking app)
// ***************************************************************************************************************************************
////////////////////  SAVE A NOTE  ////////////////////
let notes = []; // create a variable called 'notes' and assign it to an empty arry.

function saveNote(content, id) { // create a functionality to save a note
    if (typeof content === 'string' && typeof id === 'number') {
        notes.push({ content, id });
    }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


////////////////////  GET A NOTE  ////////////////////
function getNote(id) { // what if a user wants to see a specific note, but only remembers the id
    // should return the relevant note object that corresponds to the id
    // if no id is specified or if the id is not a number, log out an error string(Hint: use a for loop)
    for (let i = 0; i < notes.length; i++) {
        if (typeof id === 'number' && id === notes[i].id) {
            return notes[i];
        } else {
            return console.log('Error');
        }
    }
}
const test = getNote();
const test2 = getNote(test);
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}



////////////////////  LOG OUT NOTES  ////////////////////
// user can both save and get a not
function logOutNotesFormatted() { // what if the user just wants to read all his notes?
    // when calling the function it should log this string out for every note.
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
    }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

////////////////////  UNIQUE FEATURE  ////////////////////

// do something when do you feel like to do
//
//
//
//
//



// ***************************************************************************************************************************************
//                                              CactusIO-interactive (Smart phone usage app) optional
// ***************************************************************************************************************************************


// Adding an Activity
let activities = [];

function addActivity(date, activity, duration) {
    if (typeof duration === 'number' && typeof date === 'string' && typeof activity === 'string') {
        activities.push({date,activity,duration})
    }

    console.log(activities)
}

addActivity("23/7-18", "Youtube", 30);
addActivity("14/7-21", "Instagram", 50);
addActivity(); //to see what happens when the activity is empty

// Show my status
let myStatus = 0;
function showStatus() {
    if (activities === '') {
        console.log();
    }
    for (const i in activities) {
        myStatus += activities[i].duration;
    }
    
    console.log(`"You have added ${activities.length} activities. They amount to ${myStatus} min. of usage"`);
}

showStatus();



// Usage limit
const limitUsage = 120;

function checkLimitUsage() {
    if (parseInt(myStatus) >= limitUsage) {
        console.log(`Now your time is up today, going to lock your phone soon...`);  
    } else {        
        console.log(`You still have ${limitUsage-parseInt(myStatus)} miniutes to use your phone`);    
    }    
} 

checkLimitUsage();

// Extra feature

//If you want to increase the limit of the usage, you save $100, then you can increase 1 hour(60min) as a reward.

const saveAccount = 0;

function increaseUsage(amount){

    const minutesPer1Dollars = 60/100;
    let increasedAmount = amount * minutesPer1Dollars;

    console.log(`Limit Usage increased ${increasedAmount} miniutes more. \n[Updated Limite Usage = ${limitUsage + increasedAmount} min.]`);    
}

increaseUsage(160) //call function with amount of money you save