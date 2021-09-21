// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// const radius = 70;

// context.beginPath();
// context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// context.fillStyle = "pink";
// context.fill();
// context.lineWidth = 3;
// context.strokeStyle = "#003300";
// context.stroke();

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const centerX = this.x;
    const centerY = this.y;
    const radius = this.r;

    context.beginPath();
    context.arc(
      centerX,
      centerY,
      radius,
      this.startAngle,
      this.endAngle * Math.PI,
      false
    );
    context.fillStyle = this.fillColor;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "#003300";
    context.stroke();
  }
}
const c1 = new Circle(30, 30, 20, 0, 2 * Math.PI, "#000000");
c1.draw();

const c2 = new Circle(300, 300, 300, 20, 10 * Math.PI, "yellow");
c2.draw();
/*
 Every 100ms create a new circle instance and draw that to the canvas */
