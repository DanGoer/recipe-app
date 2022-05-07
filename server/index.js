const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:5001",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

// for dev only:
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Test" });
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});