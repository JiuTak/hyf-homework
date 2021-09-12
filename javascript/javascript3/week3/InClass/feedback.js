let moveRed;
let moveBlue;
let moveGreen;

async function translateOneByOne() {
  const circles = [...document.querySelector(".marks").children];

  try {
    const movedRedElement = await moveElement(circles[0], {
      x: 20 - parseInt(circles[0].style.left),
      y: 300 - parseInt(circles[0].style.top),
    });
    console.log(`Element(red circle) has been moved to ${movedRedElement}`);
  } catch (err) {
    console.log(`failed moveing red circle`);

    console.log(circles)
    console.log(`${circles}`)
  }

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

  const redElementPromise = moveElement(circles[0], {
    x: 20 - parseInt(circles[0].style.left),
    y: 300 - parseInt(circles[0].style.top),
  })

  const blueElementPromise = moveElement(circles[1], {
    x: 400 - parseInt(circles[1].style.left),
    y: 300 - parseInt(circles[1].style.top),
  })

  const greenElementPromise = moveElement(circles[2], {
    x: 400 - parseInt(circles[2].style.left),
    y: 20 - parseInt(circles[2].style.top),
  })


  
  Promise.all([
   redElementPromise, blueElementPromise, greenElementPromise]
    .then((redElement, blueElement, greenElement) => {
      console.log(`All circles have been moved ${redElement}, ${blueElement}, ${greenElement}`);
    })
    .catch((err) => console.error(err));
}

translateAllAtOnce();



async function moviesExerices() {
    const getResponse = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const responsedData = await getResponse.json();
    const badMovies = responsedData.filter((movies) => movies.rating < 3);
    const latestBadOnes = badMovies.filter((movies) => movies.year > 2000);
  
    console.log(badMovies);
  
    console.log(`${badMovies}`); // need stringyfy
    //   console.log(latestBadOnes);
  }
  
  moviesExerices();