// fetch("https://yesno.wtf/api")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(`Something went wrong ${err}`);
//   });

// async function yesnoAsync() {
//   try {
//     const response = await fetch("https://yesno.wtf/api");
//     const data = await response.json();
//     console.log(data.answer);
//   } catch (err) {
//     console.log(err);
//   }
// }

// yesnoAsync();

//creating your own promise
// function YesNoFail4Seconds() {
//   console.log("Start saying hello");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const helloString = "hello";
//       reject("failure!!");
//     }, 4000);
//   });
// }

// YesNoFail4Seconds()
//   .then((returnHelloObject) => {
//     console.log(`The hello string is ${returnHelloObject}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//======================================================================
// Exercise 3
//======================================================================
// function YesNoFail4Seconds() {
//   console.log("Start getting yes/no");

//   return new Promise((resolve, reject) => {
//     const decision = Math.floor(Math.random() * 3);
//     console.log(` decision is = ${decision}`);
//     setTimeout(() => {
//       if (decision === 0) {
//         resolve("yes");
//       } else if (decision === 1) {
//         resolve("no");
//       } else reject("failure!!");
//     }, 4000);
//   });
// }

// YesNoFail4Seconds()
//   .then((returnHelloObject) => {
//     console.log(`The answer is ${returnHelloObject}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//======================================================================
// Exercise 4
//======================================================================
// getLoggedInUsers should wait 5 seconds before it resolves with the users!
// Sometimes it should resolve and sometimes it should reject.
// Look into Math.random

// getLoggedInUsers() //caller / creation
//   .then((users) => {
//     console.log(users); // ['benna', 'magdy', 'carolina']
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const studentList = ["jiu", "Flori", "Saloumeh"];

// async function getLoggedInUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const index = Math.floor(Math.random() * studentList.length);

//       resolve(studentList[index]);
//       reject(`owwww failed`);
//     }, 5000);
//   });
// }

//======================================================================
// Exercise 5
//======================================================================

async function callingTwoAPIs() {
  try {
    const getingAstrosData = await fetch(
      "http://api.open-notify.org/astros.json"
    );
    const astrosResponse = await getingAstrosData.json();
    console.log(astrosResponse);
  } catch (err) {
    console.log(`Sorry something went wrong =( )`);
  }

  try {
    const gettingMovies = await fetch(
      "https://git.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const moviesResponse = await gettingMovies.json();
    console.log(moviesResponse[500]);
  } catch (err) {
    console.log(`Sorry something went wrong =( )`);
  }
}

callingTwoAPIs();

//======================================================================
// Exercise 6
//======================================================================
async function callingTwoAPIs() {
  console.log(`start here`);
  const astrosPromise = fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((astros) => console.log(`number of astros is ${astros}`))
    .catch((err) => {
      console.log(`astronauts err = ${err}`);
    });

  const moviesPromise = await fetch(
    "https://git.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  ).then((response) => response.json());
  console.log(moviesResponse[500]);

  Promise.all(astrosPromise, moviesPromise)
    .then((values) => {
      console.log(`In Promise.all!!!!!!!!`);
      console.log(values);
    })
    .catch((err) => console.error(err));
}

callingTwoAPIs();
