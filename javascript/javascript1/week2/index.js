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
        debugger
    } else {
        console.log("Need to put Firstname and Surname.")
        debugger
    }
}

getFullName("Benjamin", "Hughes", true);


//===================================================================================================================