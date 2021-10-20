const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");
const reservationsRouter = require("./api/reservations-router");
const reviewssRouter = require("./api/reviews-router");

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/api/meals", mealsRouter);

app.use("/api/reservations-router", reservationsRouter);

app.use("/api/reviews-router", reviewssRouter);

module.exports = app;
