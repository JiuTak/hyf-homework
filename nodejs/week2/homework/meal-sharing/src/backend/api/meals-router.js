const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response, next) => {
  try {
    let newMeals = meals;
    const { obj, maxPrice, searchTitle, createdAfter, limit } = request.query; // this is for checking if there are "Correct" queries
    // Get meals that has a price smaller than maxPrice
    if (maxPrice || searchTitle || createdAfter || limit) {
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
      response.json(newMeals);
    } else if (
      obj && // 👈 null and undefined check
      Object.keys(obj).length !== 0
    ) {
      return response.send("Wrong!!! Please put correct query");
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
