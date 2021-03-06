const express = require("express");
const app = express();
const router = express.Router();
const numbers = require("./numbers");

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.use("/numbers", numbers);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

module.exports = app;
