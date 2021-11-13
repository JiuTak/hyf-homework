const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    response.send(reviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const reviewsId = Number(request.params.id);
  const matchingReviews = reviews.filter(
    (reservation) => reservation.id === reviewsId
  );
  response.send(matchingReviews);
});

module.exports = router;
