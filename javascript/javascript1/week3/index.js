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
    // write code here
    const minutesInSeconds = 60;
    const hoursInSeconds = 3600;
    const daysInSeconds = 86400;
    const yearsInSeconds = 31536000;
    let sumOfTheTotalTime = 0;

    for (let i = 0; i < seriesDurations.length; i++) {
        let currentDuration = 0;
        let averageLifeSpan = 80 * yearsInSeconds;

        currentDuration = currentDuration + (seriesDurations[i].minutes * minutesInSeconds);
        currentDuration = currentDuration + (seriesDurations[i].hours * hoursInSeconds);
        currentDuration = currentDuration + (seriesDurations[i].days * daysInSeconds);

        timeWastedInPercentage = (currentDuration / averageLifeSpan) * 100;

        console.log(`${seriesDurations[i].title} took ${parseFloat(timeWastedInPercentage).toFixed(4)}% of my life`);
        sumOfTheTotalTime += timeWastedInPercentage;
    }

    console.log(`\nIn total that is ${parseFloat(sumOfTheTotalTime).toFixed(4)}% of my life`);
}
logOutSeriesText(); // logs out the text found above


// =======================================================================================================================================
// =======================================================================================================================================
//                                                       Smart-ease - Back to the basics!
// =======================================================================================================================================
// =======================================================================================================================================





// ***************************************************************************************************************************************
//                                                       NOnoN0nOYes (Note taking app)
// ***************************************************************************************************************************************



// ***************************************************************************************************************************************
//                                              CactusIO-interactive (Smart phone usage app) optional
// ***************************************************************************************************************************************