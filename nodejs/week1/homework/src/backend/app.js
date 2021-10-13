const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const review = require("./data/reviews.json");
const reservations = require("./data/reservations.json");

// it uses more than once so made it global
const joinMealsReview = meals.map((meal) => {
  meal.review = review.filter((review) => review.mealId === meal.id);
  return meal;
});

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("This is the basic page");
});

// Respond with the json for all the meals.
// For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array.
// For meals that do not have any reviews, the "reviews" property will be an empty array
app.get("/meals", async (request, response) => {
  response.send(joinMealsReview);
});

// Respond with the json for all the meals (including it's reviews) that are cheap
// (you define what a cheap meal is)
app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = meals.filter((meals) => meals.price < 180);
  response.send(cheapMeals);
});

//	Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get("/large-meals", async (request, response) => {
  const manyPeople = meals.filter((meal) => meal.maxNumberOfGuests > 15);
  response.send(manyPeople);
});

//	Respond with the json for a random meal (including it's reviews)
app.get("/meal", async (request, response) => {
  const randomNumber = Math.floor(Math.random() * meals.length);
  const randomMeal = joinMealsReview[randomNumber];
  response.send(randomMeal);
});

//	Respond with the json for all reservations
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

// Respond with the json for a random reservation
app.get("/reservation", async (request, response) => {
  const randomNumber = Math.floor(Math.random() * reservations.length);
  const randomReservation = reservations[randomNumber];
  response.send(randomReservation);
});
module.exports = app;
