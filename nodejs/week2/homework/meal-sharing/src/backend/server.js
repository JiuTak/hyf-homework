const app = require("./app");
const meals_router = require("./api/meals-router");
const reservations_router = require("./api/reservations-router");
const reviews_router = require("./api/reviews-router");

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.use("/api/meals", meals_router);

app.use("/api/reservations", reservations_router);

app.use("/api/reviews", reviews_router);
