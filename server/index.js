//index file for handling node.js app

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const decodeIDToken = require("./utility/authenticateToken");

const app = express();

const corsOptions = {
  origin: process.env.CORS,
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(decodeIDToken);

const db = require("./models");

// for dev only:
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/

db.sequelize.sync();

require("./routes/recipe.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
