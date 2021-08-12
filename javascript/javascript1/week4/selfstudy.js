// Document.createElement()

// const body = document.querySelector("body");
// body.innerHTML = "This is body area";

// const p = document.createElement("p");
// p.innerHTML = "This is H1 created from JS";
// body.appendChild(p);

document.body.onload = addElement;

function addElement() {
  const newDiv = document.createElement("div");

  const newContent = document.createTextNode("Hi there and greetings!");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
