/*
 Every 100ms create a new circle instance and draw that to the canvas */

onmousemove = setInterval(() => {
  let makeO = new Circle();
  makeO.randomize();
}, 1000);

const canvas = document.getElementById("canvas");
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  randomize() {
    // const context = canvas.getContext("2d");
    const context = canvas.getContext("2d");

    const centerX = Math.ceil(Math.random() * canvas.width);
    const centerY = Math.ceil(Math.random() * canvas.height);
    const radius = Math.ceil(Math.random() * 150);

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    let randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
    context.strokeStyle = randomColour;
    context.fillStyle = randomColour;
    context.fill();
    context.stroke();
    context.closePath();
  }
}
