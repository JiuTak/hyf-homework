const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  try {
    let newMeals = [...meals];
    const { maxPrice, searchTitle, createdAfter, limit, ...misspelled } =
      request.query;

    const comparedQuries = [];

    if (misspelled && Object.keys(misspelled).length === 0) {
      // Get meals that has a price smaller than maxPrice
      if (maxPrice) {
        newMeals = newMeals.filter((meal) => meal.price <= parseInt(maxPrice));
        comparedQuries.push(newMeals);
      }

      // Get meals that partially match a title.
      if (searchTitle) {
        newMeals = newMeals.filter((meal) =>
          meal.title.toLowerCase().includes(searchTitle)
        );
        comparedQuries.push(newMeals);
      }

      // Get meals that has been created after the date
      if (createdAfter) {
        newMeals = newMeals.filter(
          (meal) => new Date(meal.createdAt) > new Date(createdAfter)
        );
        comparedQuries.push(newMeals);
      }

      // 	Only specific number of meals
      if (limit) {
        newMeals = newMeals.splice(0, limit);
        comparedQuries.push(newMeals);
      }

      // Correct queries but no data to return
      if (newMeals < 1) {
        return response.status(404).send("Product dose not exist");
      }

      response.status(200).json(newMeals);
    } else {
      response.send("Please put correct query");
    }
  } catch (error) {
    throw response.status(500).send(error);
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
