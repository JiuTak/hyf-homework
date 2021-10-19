const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    response.send(reservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const reservationsId = Number(request.params.id);
  const matchingReservations = reservations.filter(
    (reservation) => reservation.id === reservationsId
  );
  response.send(matchingReservations);
});

module.exports = router;
