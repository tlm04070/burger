const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var orm = require("./config/orm.js");
var routes = require("./controllers/burgers_controller.js");
// Console log all the party_name's.

app.use("/", routes);

app.listen(PORT, function() {
  console.log("listening on port: " + PORT);
});
