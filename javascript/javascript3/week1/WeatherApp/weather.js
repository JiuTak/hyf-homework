/*===============================================================================================
                            Fetch weather data from a city
===============================================================================================*/
const inputField = document.getElementById("input-area");
const clickBtn = document.getElementById("click-button");
const resultLine = document.getElementById("weather-status");
const city = document.getElementById("place");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind-speed");
const cloud = document.getElementById("how-cloudy");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const weatherCard = document.getElementById("result");
const icon = document.getElementById("big-icon");
const todayDate = document.getElementById("date");
const todaytoday = document.getElementById("today");
const weatherDiscription = document.getElementById("weather-description");
const userLocation = document.getElementById("user-location");

let userInput = "";
let cityTemperature = 0;
let windSpeed = 0;
let cloudGage = 0;
let sunTime;
let longitude;
let latitude;
let weatherData;

let userCurrentLatitude;
let userCurrentLongitude;

clickBtn.addEventListener("click", showWeather);
userLocation.addEventListener("click", userCurrentLocation);

const monthShortNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function dateFormat(d) {
  let t = new Date(d);
  return (
    t.getDate() + " " + monthShortNames[t.getMonth()] + ", " + t.getFullYear()
  );
}

const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = dayName[new Date().getDay()];

// make new function get weather data by name

async function showWeather(lat, lon) {
  if (inputField.value !== "") {
    userInput = inputField.value;
    todaytoday.innerHTML = dateFormat(new Date());
    todayDate.innerHTML = day;
    weatherCard.style.display = "flex";

    let where;

    if (lat && lon) {
      where = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eee80db5dfbb76a6e0aa02bb163b6ffe`;
    } else {
      where = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=eee80db5dfbb76a6e0aa02bb163b6ffe`;
    }

    const fetchResponse = await fetch(where);
    const weatherData = await fetchResponse.json();
    console.log(weatherData);

    const cityWhere = weatherData.name;
    if (cityWhere === undefined) {
      alert(`plz put right city's name`);
    } else {
      city.innerHTML = `${cityWhere}`;
    }

    weatherDiscription.innerHTML = weatherData.weather[0].description;

    // calculate kelvin to celsius
    cityTemperature = Math.ceil(weatherData.main.temp - 273.15);
    temperature.innerHTML = `${cityTemperature}°C`;

    // wind speed
    windSpeed = weatherData.wind.speed;
    wind.innerHTML = `${weatherData.wind.speed} m/s`;

    // how cloudy
    cloudGage = weatherData.clouds.all;
    howCloudy();

    // Sunrise time
    sunTime = weatherData.sys.sunrise;
    whatTime();
    sunrise.innerHTML = `${sunTime}`;

    // Sunset time
    sunTime = weatherData.sys.sunset;
    whatTime();
    sunset.innerHTML = `${sunTime}`;

    // Location
    longitude = weatherData.coord.lon;
    latitude = weatherData.coord.lat;
    getMapWithLocation(latitude, longitude);
  } else {
    return alert`Please enter city name (State name - if it's in the USA)`;
  }
}

function howCloudy() {
  if (cloudGage > 80) {
    cloud.innerHTML = "Very Cloudy";
    icon.innerHTML = '<i class="fas fa-cloud"></i>';
  } else if (cloudGage >= 40) {
    cloud.innerHTML = "Little Cloudy";
    icon.innerHTML = '<i class="fas fa-cloud-sun"></i>';
  } else {
    cloud.innerHTML = "Clear day";
    icon.innerHTML = '<i class="far fa-sun" aria-hidden="true"></i>';
  }
}

function whatTime() {
  let date = new Date(sunTime * 1000); // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let hours = "0" + date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();

  sunTime = `${hours.substr(-2)}:${minutes.substr(-2)}:${seconds.slice(-2)}`;
}

function getMapWithLocation(latitude, longitude) {
  console.log(latitude, longitude);

  let currentPlace = { lat: latitude, lng: longitude };
  let mapOptions = {
    center: currentPlace,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  let map = new google.maps.Map(
    document.getElementById("googleMap"),
    mapOptions
  );

  let marker = new google.maps.Marker({
    position: currentPlace,
    map: map,
  });
}

function userCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      userCurrentLatitude = position.coords.latitude;

      userCurrentLongitude = position.coords.longitude;

      showWeather(userCurrentLatitude, userCurrentLongitude);
      getMapWithLocation(userCurrentLatitude, userCurrentLongitude);
    },
    function (error) {
      console.log(`The Locator was denied.`);
    }
  );
}
