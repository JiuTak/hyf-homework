// function whatIsThis(param) {
//   if (typeof param === "number") {
//     console.log(`This is numbers`);
//   } else if (typeof param == "boolean") {
//     console.log(`This is Boolean`);
//   } else if (typeof param == `function`) {
//     thisIsFunction();
//   }
// }
// function thisIsFunction() {
//   console.log(`This is callback function`);
// }

// whatIsThis(thisIsFunction);

/*=================================================================
                        Click counter
=================================================================*/
const basicClicker = document.querySelector("#bscClicker");
basicClicker.addEventListener("click", countNumber);

let countNum = 0;

function countNumber() {
  basicClicker.innerHTML = countNum;
  countNum++;
}

/*=================================================================
                        Delay clicker
=================================================================*/
const clicker = document.querySelector("#btn-clicker");

clicker.addEventListener("click", counter);

let count = 0;
function counter() {
  setTimeout(() => {
    clicker.innerHTML = count;
    count++;
  }, 2000);
}

/*=================================================================
                        Page onload
=================================================================*/

const loadingDone = () => {
  console.log("DOM fully loaded and parsed");
};
window.addEventListener("load", loadingDone);

console.log("is this woring?");

/*=================================================================
                        Mouse position
=================================================================*/

// const photoArea = document.getElementsByClassName("class1");

// document.body.addEventListener("click", function (e) {
//   console.log("X is: " + e.pageX);
//   console.log("Y is: " + e.pageY);
// });

// document.getElementById("class1").addEventListener("mousemove", function (e) {
//   console.log("Mousevoce X is: " + e.pageX);
//   console.log("Mousevoce Y is: " + e.pageY);
// });

const testbtn = document.querySelector("#test");
testbtn.addEventListener('click', testFn)

function testFn() {

  setTimeout(() => {
    console.log("clicked");
  }, 5000);
}
