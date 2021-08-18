/*===============================================================
1. Create an array of movies containing the movies with a short title (you define what short means)
===============================================================*/

const { movies } = require(`./movies`);

const shortTitleArray = movies
  .filter((str) => str.title.length <= 3)
  .map((str) => str.title);

console.log(shortTitleArray);

/*===============================================================
2. Create an array of movie titles with long movie titles
===============================================================*/

const longTitleArray = movies
  .filter((name) => name.title.length >= 50)
  .map((name) => name.title);

console.log(longTitleArray);

/*===============================================================
3. Count the number of movies made between 1980-1989 (including both the years)
===============================================================*/
const eightiesMovies = movies.filter(
  (years) => 1979 < years.year && years.year <= 1989
).length;

console.log(eightiesMovies);

/*===============================================================
4. Create a new array that has an extra key called tag.
The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
===============================================================*/

const tags = []; //make an empty array

movies.forEach((rate) => {
  let reputation = "";
  if (rate.rating >= 7) {
    reputation = `rating: Good`;
    tags.push(reputation);
  }
  if (rate.rating >= 4 && rate.rating < 7) {
    reputation = `rating: Average`;
    tags.push(reputation);
  } else if (rate.rating < 4) {
    reputation = `rating: Bad`;
    tags.push(reputation);
  } else return `Sorry`;
});

console.log(tags);

/*===============================================================
5. Using chaining, first filter the movies array to only contain the movies rated higher than 6.
Now map the movies array to only the rating of the movies.
===============================================================*/

let greatMovies = [];

let test = movies
  .filter((goodMovie) => goodMovie.rating > 6)
  .map((ratedMovies) => ratedMovies.rating);
greatMovies.push(test);

console.log(greatMovies);

/*===============================================================
6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
Can you make sure the search is case insensitive?
===============================================================*/
let keywords = [];

let keywordsMovies = movies
  .filter(
    (movyTitle) =>
      movyTitle.title.toLowerCase().includes("surfer") ||
      movyTitle.title.toLowerCase().includes("alien") ||
      movyTitle.title.toLowerCase().includes("benjamin")
  )
  .map((movyTitle) => movyTitle.title);
keywords.push(keywordsMovies);

console.log(keywords);

/*===============================================================
7. Create an array of movies where a word in the title is duplicated.
Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
===============================================================*/

let duplicatedWord = [];

movies
  .map((moviesTitle) => moviesTitle.title.split(" ")) // split the title words
  .forEach((title) =>
    //check if the word have many index
    title.filter((word, index) => {
      //if a word have more than 2 index, then it is duplicated
      if (title.indexOf(word) != index) {
        duplicatedWord.push(title.join(" "));
      }
    })
  );
console.log(duplicatedWord);

/*===============================================================
8. Calculate the average rating of all the movies using reduce. Optional
===============================================================*/

const averageRatingScore = movies
  .map((moveiRatings) => moveiRatings.rating)
  .reduce(function (avg, value, _, { length }) {
    return avg + value / length;
  }, 0)
  .toFixed(2);

console.log(averageRatingScore);

/*===============================================================
9. Count the total number of Good, Average and Bad movies using reduce.
A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
===============================================================*/

const goodMovies = movies
  .filter((movie) => movie.rating >= 7)
  .reduce((count) => {
    return count + 1;
  }, 0);

const averageMovies = movies
  .filter((movie) => movie.rating >= 4 && movie.rating < 7)
  .reduce((count) => {
    return count + 1;
  }, 0);

const badMovies = movies
  .filter((movie) => movie.rating < 4)
  .reduce((count) => {
    return count + 1;
  }, 0);

console.log(
  `{goodMovies: ${goodMovies}, averageMovies: ${averageMovies}, badMovies: ${badMovies}}`
);
