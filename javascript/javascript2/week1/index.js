/*==================================================
            Find the shortest word
==================================================*/
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord() {
  let result = danishWords.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });
  return result;
}

console.log(getShortestWord(danishWords)); // returns 'ø'

/*==================================================
        Find and count the Danish letters
==================================================*/
let letters = ["æ", "ø", "å"];

function getDanishLetter(string, letters) {
  let obj = {};
  let total = 0;

  letters.forEach((letter) => {
    let count = (string.match(new RegExp(letter, "g")) || []).length;
    if (count > 0) {
      obj[letter] = count;
      total += count;
    }
  });
  obj["total"] = total;

  return obj;
}

const danishString = "Jeg har en blå bil";
console.log(getDanishLetter(danishString, letters)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(getDanishLetter(danishString2, letters)); // returns {total: 4, æ: 1, ø: 2, å: 1}

/*==================================================
        Spirit animal name generator
==================================================*/

const rootDiv = document.getElementById("root");
const nameArea = document.getElementById("nameArea");
const result = document.getElementById("result");

// *********
// Event types - Optional and a little tricky
const testBtn = document.querySelector("#test1");
testBtn.addEventListener("click", generateAnimalName);
nameArea.addEventListener("mouseover", generateAnimalName);
nameArea.addEventListener("keyup", generateAnimalName);

function generateAnimalName(e) {
  var actionType = document.getElementById("animal-selection").value;
  if (actionType === e.type) {
    getUserName(e);
  }
}
// *********

function getUserName(e) {
  if (nameArea.value !== "" && nameArea.value.trim()) {
    const randomItem =
      spritsName[Math.floor(Math.random() * spritsName.length)];
    result.innerHTML = nameArea.value + " - " + randomItem;
  } else {
    result.innerHTML = "Please enter your name";
  }
}
const spritsName = [
  "Contemplative Teal Beetle",
  "Unwavering White Ridley",
  "Sensible Fuchsia Mockingbird",
  "Steady Plum Boa",
  "Convivial Purple Cottontail",
  "Contemplative Teal Beetle2",
  "Unwavering White Ridley2",
  "Sensible Fuchsia Mockingbird2",
  "Steady Plum Boa2",
  "Convivial Purple Cottontail2",
];

/*==================================================
        hyfBay - get the okay'est products here
==================================================*/
