// const danishString = "Jeg har en blå bil";
// getDanishLetter(danishString); // returns {total: 1, å: 1}

// const danishString2 = "Blå grød med røde bær";
// getDanishLetter(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function getDanishLetter(str) {
  let countØ = 0;
  let countÆ = 0;
  let countÅ = 0;

  if (str.includes("ø")) {
    countØ = (str.match(/ø/g) || []).length;
    countØ;
  }
  if (str.includes("å")) {
    countÅ = (str.match(/å/g) || []).length;
    countÅ;
  }
  if (str.includes("æ")) {
    countÆ = (str.match(/æ/g) || []).length;
    countÆ;
  }

  let total = countØ + countÅ + countÆ;
  return `Total: ${total}, ${countÆ > 0 ? "Æ: " + countÆ : ""} ${
    countØ > 0 ? "Ø: " + countØ : ""
  } ${countÅ > 0 ? "Å: " + countÅ : ""}`;
}

const danishString = "Jeg har en blå bil";
console.log(getDanishLetter(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(getDanishLetter(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}

// let letters = ["æ", "ø", "å"];

// function getDanishLetter(string, letters) {
//   let obj = {};
//   let total = 0;
//   letters.forEach((letter) => {
//     let count = (string.match(new RegExp(letter, "g")) || []).length;
//     if (count > 0) {
//       obj[letter] = count;
//       total += count;
//     }
//   });
//   obj["total"] = total;

//   return obj;
// }
