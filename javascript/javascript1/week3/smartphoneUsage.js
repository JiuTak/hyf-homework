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