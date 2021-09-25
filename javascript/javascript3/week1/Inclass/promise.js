// Promises

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("Hello promised world");
    } else {
      reject("Your promised world has failed");
    }
  }, 1000);
});

console.log("Page loaded");
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

// -----
// Fetching weather data

const city = "Budapest";
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eee80db5dfbb76a6e0aa02bb163b6ffe`;

const fetchExampleWithThen = () => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

const fetchExampleWithThenAndConsts = () => {
  const fetchResult = fetch(api);
  const fetchResponse = fetchResult.then((response) => {
    const fetchResponseJSON = response.json();
    return fetchResponseJSON;
  });
  fetchResponse.then((data) => {
    console.log(data);
  });
};

const fetchExampleWithAsyncAwait = async () => {
  const fetchResult = fetch(api);
  const fetchResponse = await fetchResult;
  const fetchResponseJSON = fetchResponse.json();
  const data = await fetchResponseJSON;
  console.log(data);
};

fetchExampleWithThen();
fetchExampleWithThenAndConsts();
fetchExampleWithAsyncAwait();

// -----
// Example with embedded fetches

const syncFetchExample = () => {
  fetch("https://geolocation")
    .then((response) => response.json())
    .then((geolocationData) => {
      const cityName = geolocationData.cityName;
      fetch(`http://weather/city/${cityName}`)
        .then((response) => response.json())
        .then((weatherData) => {
          const cloudCoverage = weatherData.cloudCoverage;
          console.log(`Cloud coverage where you are is ${cloudCoverage}%`);
        });
    });
};

const asyncFetchExample = async () => {
  const geoDataResponse = await fetch("https://geolocation");
  const geoData = await geoDataResponse.json();
  const cityName = geoData.cityName;
  const weatherDataResponse = await fetch(`http://weather/city/${cityName}`);
  const weatherData = await weatherDataResponse.json();
  const cloudCoverage = weatherData.cloudCoverage;
  console.log(`Cloud coverage where you are is ${cloudCoverage}%`);
};
