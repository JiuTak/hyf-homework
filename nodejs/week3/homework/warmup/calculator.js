const e = require("express");
const express = require("express");
const router = express.Router();
// const knex = require("../database");
// const { request, response } = require("express");

router.get("/", async (request, response) => {
  try {
    console.log("this is calculator here");
    response.send("Welcome to the calculator homework");
  } catch (error) {
    throw error;
  }
});

// GET section
router.get("/add", (request, response) => {
  const result = Object.values(request.query)
    .flat()
    .reduce((a, b) => Number(a) + Number(b), 0);
  response.send(`This is the result ${result}`);
});

router.get("/sub", (request, response) => {
  const result = Object.values(request.query)
    .flat()
    .reduce((a, b) => Number(a) - Number(b));
  response.send(`This is the result ${result}`);
});

router.get("/multiply", (request, response) => {
  let result = Object.values(request.query)
    .flat()
    .reduce((a, b) => Number(a) * Number(b));
  response.send(`This is the result ${result}`);
});

router.get("/divide", (request, response) => {
  let result = Object.values(request.query)
    .flat()
    .reduce((a, b) => Number(a) / Number(b));
  response.send(`This is the result ${result}`);
});

// POST section

router.post("/add", (request, response) => {
  const result = Object.values(request.query)
    .flat()
    .reduce((a, b) => Number(a) + Number(b), 0);
  response.send(`This is the result ${result}`);
});

router.post("/sub", (request, response) => {
  const result = Object.values(request.query)
    .flat()
    .reduce((a, b) => Number(a) - Number(b));
  response.send(`This is the result ${result}`);
});

router.post("/multiply", (request, response) => {
  let result = Object.values(request.query)
    .flat()
    .reduce((a, b) => Number(a) * Number(b));
  response.send(`This is the result ${result}`);
});

router.post("/divide", (request, response) => {
  let result = Object.values(request.query)
    .flat()
    .reduce((a, b) => Number(a) / Number(b));
  response.send(`This is the result ${result}`);
});

module.exports = router;
