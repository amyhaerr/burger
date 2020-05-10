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

router.post("/updateOne", function (req, res) {
    // var condition = `id = ${req.params.id}`;
    var id = req.body.id;
    burger.updateOne(id, function (){
        res.redirect("/");
    });
});

module.exports = router;