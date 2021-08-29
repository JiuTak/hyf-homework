const body = document.querySelector("body");

fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // const h1 = document.createElement("h1");
    // h1.innerHTML = `There are ${response.number} astronauts in space, they are:`;
    // body.appendChild(h1);

    // for (let i = 0; i < response.people.length; i++) {
    //   const h2 = document.createElement("h2");
    //   h2.innerHTML = response.people[i].name;
    //   body.appendChild(h2);
    // }
    console.log(response.number);
    const numAstronauts = `There are €{response.number} astronauts`;
    console.log(numAstronauts);

    response.people.forEach((element) => {
      console.log(element.name);
    });
  });
