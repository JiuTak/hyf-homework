/*
- Get a random dog image and display it in the browser
- Get a new image every 2 sec.
- Get the list of all breeds from https://dog.ceo/api/breeds/list/all
- Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
- Display the name of the breed under the image
*/

// function fetchImages() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((response) => {
//       document.getElementById("some-images").src = response.message;
//     });
// }

// setInterval(() => {
//   fetchImages();
// }, 2000);

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((response) => {
    const breeds = Object.keys(response.message);
    console.log(`This is breeds ${breeds}`);
    const choosenBreedIndex = Math.floor(Math.random() * breeds.length);

    console.log(`This is choosenBreedIndex ${choosenBreedIndex}`);
    const choosenBreed = breeds[choosenBreedIndex];
    console.log(choosenBreed);

    const choosenBreedUrl = `https://dog.ceo/api/breed/${choosenBreed}/images/random`;

    fetch(choosenBreedUrl)
      .then((response) => response.json())
      .then((response) => {
        document.getElementById("some-images").src = response.message;
      });

    document.getElementById("img1").innerHTML = choosenBreed;
  });
