var express = require("express");
// var connection = require("../config/connection.js");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
   
    burger.all(function (data) {//TODO...as we are passing in res, getting error that burger.all (is not a function)
        
        res.render("index", {burger: data});
    });
});

router.post("/insertBurger", function (req, res) {
    burger.insertOne(req.body.burger_name, function (addon) {
        res.redirect("/")
    });
});

router.post("/update/:id", function (req, res) {
    var condition = `id = ${req.params.id}`;
    burger.updateOne({ devoured: req.body.devoured },
        condition, function () {
            res.redirect("/");
        })
});

module.exports = router;