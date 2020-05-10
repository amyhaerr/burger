var express = require("express");
var exhbs = require("express-handlebars")
var routes = require("./controllers/burgers_controller.js");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;


app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })
);


app.engine("handlebars", exhbs({ defaultLayout: "main" })
);

app.set("view engine", "handlebars");



app.use(routes);


app.listen(PORT, function() {
  
  console.log("Server listening on: http://localhost:" + PORT);
});