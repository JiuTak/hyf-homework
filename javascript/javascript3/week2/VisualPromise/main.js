// This code will move the li to the position 100, 100.
// Calling moveElement will return a promise that resolves after the li element has been moved.

// moveElement(document.querySelector("li"), { x: 100, y: 100 }).then(() => {
//   console.log("Element has been moved");
// });

/* Should translate the circles one at a time from their random start position to their target see the target positions below.
Red circle target: x: 20px, y: 300px;
Blue circle target: x: 400px, y: 300px;
Green circle target: x: 400px, y: 20px;
  Log something out after each element has been moved */

let moveRed;
let moveBlue;
let moveGreen;

async function translateOneByOne() {
  const circles = [...document.querySelector(".marks").children];
  moveRed = await moveElement(circles[0], {
    x: 20 - parseInt(circles[0].style.left),
    y: 300 - parseInt(circles[0].style.top),
  }).then(() => {
    console.log("Element(red circle) has been moved");
  });

  moveBlue = await moveElement(circles[1], {
    x: 400 - parseInt(circles[1].style.left),
    y: 300 - parseInt(circles[1].style.top),
  }).then(() => {
    console.log("Element(blue circle) has been moved");
  });

  moveGreen = await moveElement(circles[2], {
    x: 400 - parseInt(circles[2].style.left),
    y: 20 - parseInt(circles[2].style.top),
  }).then(() => {
    console.log("Element(green circle) has been moved");
  });
}

// translateOneByOne();

/* Should translate all the circles at the same time from their random start position to their target.  */
function translateAllAtOnce() {
  const circles = [...document.querySelector(".marks").children];

  console.log(circles);
  Promise.all([
    moveElement(circles[0], {
      x: 20 - parseInt(circles[0].style.left),
      y: 300 - parseInt(circles[0].style.top),
    }),
    moveElement(circles[1], {
      x: 400 - parseInt(circles[1].style.left),
      y: 300 - parseInt(circles[1].style.top),
    }),
    moveElement(circles[2], {
      x: 400 - parseInt(circles[2].style.left),
      y: 20 - parseInt(circles[2].style.top),
    }),
  ])
    .then(() => {
      console.log(`All circles have been moved`);
    })
    .catch((err) => console.error(err));
}

translateAllAtOnce();
