const express = require("express");
const firstNumber = require("./firstNumber");
const secondNumber = require("./secondNumber");
const router = express.Router();

router.get("/", async (request, response) => {
  response.send("This is inside the route");
});

router.get("/add", async (request, response) => {
  const { first, second } = request.query;
  const sum = parseInt(first) + parseInt(second);
  response.send(`${sum}`);
});

router.use(
  "/multiply/:firstNumber/:secondNumber",
  async (request, response) => {
    const { firstNumber, secondNumber } = request.params;
    const multiply = firstNumber * secondNumber;
    response.send(`${multiply}`);
  }
);

module.exports = router;
