const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

//Configure App
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Connect to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });

//Set up the routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

//Start teh server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
