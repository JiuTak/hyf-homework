/*
Function as a variable

Create funtions that are used in these different ways:
*/

//**************************************************************************************
// 1- Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
//**************************************************************************************
const funcArray = [funct1, funct2, funct3];

function funct1() {
  return `This is function 1`;
}

function funct2() {
  return `This is function 2`;
}

function funct3() {
  return `This is function 3`;
}

funcArray.forEach((element) => {
  return console.log(element);
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

// funfunction();

//**************************************************************************************
// 3- create an object that has a key whose value is a function. Try calling this function.
//**************************************************************************************

const obj = {
  Jiu: function personalInfo(age, height) {
    const userage = age;
    const userheight = height;
    const nationality = "Korean";
    return `${userage} years old, ${userheight}cm tall and ${nationality}`;
  },
};
// console.log(obj.Jiu(24, 173));
