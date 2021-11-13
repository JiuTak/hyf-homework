const express = require("express");
const app = express();
const router = express.Router();
const calculator = require("./calculator");

app.get("/", (req, res) => res.send("nodejs week3 homework"));
app.use(express.json()); // Parse JSON bodies(as sent by API clients)

app.use("/api", router);
router.use("/calculator", calculator);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

module.exports = app;
