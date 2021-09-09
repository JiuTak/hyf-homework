async function moviesExerices() {
  const getResponse = await fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  );
  const responsedData = await getResponse.json();
  const badMovies = await responsedData.filter((movies) => movies.rating < 3);
  const latestBadOnes = await badMovies.filter((movies) => movies.year > 2000);

  console.log(badMovies);
  console.log(latestBadOnes);
}

moviesExerices();
