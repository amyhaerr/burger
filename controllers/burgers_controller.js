var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerBurger = { burgers: data };
        res.render("index", burgerBurger);
    });

});

router.post("/insertOne", function (req, res) {
    burger.insertOne(req.body.burger_name, function (addon) {
        res.redirect("/")
    });
});

router.post("/updateOne/:id", function (req, res) {
    
    var colVal = "id";
    var id = req.params.id;
    burger.updateOne(colVal, id, function (){
        res.redirect("/");
    });
});

module.exports = router;