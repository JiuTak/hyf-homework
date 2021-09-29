// setTimeout(() => {
//   fetch("https://restcountries.eu/rest/v2/all")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }, 3000);

setTimeout(() => {
  practice();
}, 3000);

async function practice() {
  const getDataResponse = await fetch("https://restcountries.eu/rest/v2/all");
  const getData = await getDataResponse.json();
  console.log(getData);
}
