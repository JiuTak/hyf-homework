/*==================================================
            Find the shortest word
==================================================*/

function getShortestWord() {
  console.log(
    danishWords.reduce(function (a, b) {
      return a.length <= b.length ? a : b;
    })
  );
}
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
getShortestWord(danishWords); // returns 'ø'

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

function myFunction() {
  etrName.innerHTML = "Helloooooo Jiu";
}
