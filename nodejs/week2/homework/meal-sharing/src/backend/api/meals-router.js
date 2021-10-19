const express = require("express");
const { map } = require("../app");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  const maxPrice = request.query.maxPrice;
  const searchTitle = request.query.title;
  const createdAfter = request.query.createdAfter;
  const howMany = request.query.limit;
  const obj = request.query; // this is for checking if there are "Correct" queries

  try {
    // Get meals that has a price smaller than maxPrice
    if (maxPrice || searchTitle || createdAfter || howMany) {
      if (maxPrice) {
        const sortingMeals = meals.filter(
          (meal) => meal.price <= parseInt(maxPrice)
        );
        response.send(sortingMeals);
      }

      // Get meals that partially match a title.
      if (searchTitle) {
        const filteredMeals = meals.filter((meal) =>
          meal.title.toLowerCase().includes(searchTitle)
        );
        response.send(filteredMeals);
      }

      // Get meals that has been created after the date
      if (createdAfter) {
        const whenCreated = meals.filter(
          (meal) => meal.createdAt > createdAfter
        );
        response.send(whenCreated);
      }

      // 	Only specific number of meals
      if (howMany) {
        const howManyMeals = meals.splice(0, howMany);
        response.send(howManyMeals);
      }
    } else if (
      obj && // 👈 null and undefined check
      Object.keys(obj).length !== 0
      // &&  Object.getPrototypeOf(obj) === Object.prototype // got it from google but I don't understand
    ) {
      response.send("Wrong!!! Please put correct query");
    } else {
      response.send(meals);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const mealsId = Number(request.params.id);
  const matchingMeals = meals.filter((meal) => meal.id === mealsId);
  console.log(matchingMeals);
  if (matchingMeals.length > 0) {
    response.send(matchingMeals);
  } else response.send(`Dose not exist`);
});

module.exports = router;
