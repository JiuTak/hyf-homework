/*
Function as a variable

Create funtions that are used in these different ways:
*/

//**************************************************************************************
// 1- Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
//**************************************************************************************
const funcArray = [funct1(), funct2(), funct3()];

function funct1() {
  console.log(`This is function 1`);
}

function funct2() {
  console.log(`This is function 2`);
}

function funct3() {
  console.log(`This is function 3`);
}

funcArray.forEach((element) => {
  return element;
});
//**************************************************************************************
// 2- Create a function as a const and try creating a function normally.
//**************************************************************************************
const funfunction = function () {
  console.log(`this is doubled function`);
  normalFunction();
};

function normalFunction() {
  console.log(`This is the 'normal' way to create function`);
}

funfunction();

//**************************************************************************************
// 3- create an object that has a key whose value is a function. Try calling this function.
//**************************************************************************************

const obj = {
  Jiu: personalInfo(),
};

function personalInfo() {
  const age = 24;
  const height = 173;
  const nationality = "Korean";

  return `${age} years old, ${height}cm tall and ${nationality}`;
}

console.log(Object.values(obj));
