/*
Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. 
The getCurrentPosition function is probably going to throw an error, but that is fine. 
As long as you can use it as a promise.

Example of usage

*/

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

// console.log(`this is inside of the async function`);
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitue = position.coords.latitude;
        const longitute = position.coords.longitude;
        position = { latitue, longitute };
        resolve(position);
      });
    } else {
      reject;
    }
  });
}

function setTimeoutPromise(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(`This should be shown in 3 sec`);
      // getCurrentLocation();
    }, sec);
  });
}
