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