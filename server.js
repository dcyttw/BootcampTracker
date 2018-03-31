// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8200;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

//================ SETTING HANDLEBARS ==============//
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// IMPORTING ROUTES AND GIVE SERVER ACCESS =============//
// require("./controller/routes/html-routes.js")(app);
require("./controller/routes/get-api-routes.js")(app);
require("./controller/routes/post-api-routes.js")(app);
// app.use("/", routes);


// SYNCING OUR SEQUELIZE MODELS AND THEN STARTING OUR EXPRESS APP ============//
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
