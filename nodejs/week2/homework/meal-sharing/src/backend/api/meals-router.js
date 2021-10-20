const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  try {
    let newMeals = meals;
    const { maxPrice, searchTitle, createdAfter, limit } = request.query;
    const queryArray = [
      "obj",
      "maxPrice",
      "searchTitle",
      "createdAfter",
      "limit",
    ];
    const userQueries = Object.keys(request.query);
    const comparedQuries = [];

    for (let i = 0; i < queryArray.length; i++) {
      for (let j = 0; j < userQueries.length; j++) {
        if (userQueries[j] === queryArray[i]) {
          comparedQuries.push(userQueries[j]);
        }
      }
    }

    if (comparedQuries.length == userQueries.length) {
      // Get meals that has a price smaller than maxPrice
      if (maxPrice) {
        newMeals = newMeals.filter((meal) => meal.price <= parseInt(maxPrice));
      }

      // Get meals that partially match a title.
      if (searchTitle) {
        newMeals = newMeals.filter((meal) =>
          meal.title.toLowerCase().includes(searchTitle)
        );
      }

      // Get meals that has been created after the date
      if (createdAfter) {
        newMeals = newMeals.filter(
          (meal) => new Date(meal.createdAt) > new Date(createdAfter)
        );
      }

      // 	Only specific number of meals
      if (limit) {
        newMeals = newMeals.splice(0, limit);
      }

      // Correct queries but no data to return
      if (newMeals < 1) {
        return response.send("No matched data");
      }
      response.json(newMeals);
    } else {
      response.send("Please put correct query");
    }
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const mealsId = Number(request.params.id);
  const matchingMeals = meals.filter((meal) => meal.id === mealsId);
  // console.log(matchingMeals);
  if (matchingMeals.length > 0) {
    response.send(matchingMeals);
  } else response.send(`Dose not exist`);
});

module.exports = router;
