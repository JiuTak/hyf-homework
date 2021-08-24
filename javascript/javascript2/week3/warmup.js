/*=============================================
                WARM UP
=============================================*/

//**************************************************************************************
// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
//**************************************************************************************

setTimeout(() => {
  console.log(`Call after 2.5 seconds`);
}, 2500);

//**************************************************************************************
// 2. Create a function that takes 2 parameters: delay and stringToLog.
//    Calling this function should log out the stringToLog after delay seconds.
//    Call the function you have created with some different arguments.
//**************************************************************************************

function ex2(delay, stringToLog) {
  let howlong = delay * 1000;
  setTimeout(() => {
    console.log(stringToLog);
  }, howlong);
}

ex2(5, "This string logged after 5 seconds");
ex2(3, "This string logged after 3 seconds");

//**************************************************************************************
// 3. Create a button in html.
//    When clicking this button, use the function you created in the previous task
//   to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
//**************************************************************************************
const button1 = document.getElementById("ex3");

button1.addEventListener("click", ex3);

function ex3() {
  ex2(5, "Called after 5 seconds");
}

//**************************************************************************************
// 4. Create two functions and assign them to two different variables.
//    One function logs out Earth, the other function logs out Saturn.
//    Now create a new third function that has one parameter: planetLogFunction.
//    The only thing the third function should do is call the provided parameter function.
//    Try call the third function once with the Earth function and once with the Saturn function.
//**************************************************************************************

function earthLogger() {
  console.log(`Earth`);
}
function saturnLogger() {
  console.log(`Saturn`);
}

function planetLogFunction(string) {
  if (string === earthLogger) {
    earthLogger();
  }
  if (string === saturnLogger) {
    saturnLogger();
  }
  return null;
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//**************************************************************************************
// 5. Create a button with the text called "Log location".
//    When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
//**************************************************************************************
const logbtn = document.getElementById("logcation");
const userLocation = document.getElementById("yourLocation");

logbtn.addEventListener("click", getLocation);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        (userLocation.innerHTML =
          "Latitude : " +
          position.coords.latitude.toFixed(4) +
          "<br>Logitude: " +
          position.coords.longitude.toFixed(4))
    );
  } else {
    logbtn.innerHTML = "Geolocation is not supported by this browser.";
  }
}

//**************************************************************************************
// 6. Optional Now show that location on a map using fx the Google maps api
//**************************************************************************************
// const mapLocation = document.getElementById('logcationMap')
// mapLocation.addEventListener('click', showPosition)

// function showPosition(position) {
//   let latlon = position.coords.latitude + "," + position.coords.longitude;

//   let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
//   "+ latlon +"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

//   document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
// }

//**************************************************************************************
// 7. Create a function called runAfterDelay.
//    It has two parameters: delay and callback.
//    When called the function should wait delay seconds and then call the provided callback function.
//    Try and call this function with different delays and different callback functions
//**************************************************************************************

function runAfterDelay(delay, callback) {
  let delayTid = delay * 1000;

  setTimeout(() => {
    callback();
  }, delayTid);
}

runAfterDelay(4, function () {
  console.log("Should be logged after 4 seconds");
});

//**************************************************************************************
// 8. Check if we have double clicked on the page.
//    A double click is defined by two clicks within 0.5 seconds.
//    If a double click has been detected, log out the text: "double click!"
//**************************************************************************************

document.body.addEventListener("dblclick", dblclk);

function dblclk() {
  console.log("double clicked!");
}
//**************************************************************************************
// 9. Create a function called jokeCreator that has three parameters:
//   shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
//    If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
//**************************************************************************************

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  //   if (
  //     typeof shouldTellFunnyJoke === "Boolean" &&
  //     typeof logFunnyJoke == "function" &&
  //     typeof logBadJoke == "function"
  //   ) {
  if (shouldTellFunnyJoke !== true) {
    logBadJoke();
  } else {
    logFunnyJoke();
  }
  //   }
}

function logFunnyJoke() {
  console.log(`hahahahahahahaha`);
}

function logBadJoke() {
  console.log(`Booooooooooooooo`);
}

jokeCreator(true, logFunnyJoke, logBadJoke);

jokeCreator(false, logFunnyJoke, logBadJoke);
