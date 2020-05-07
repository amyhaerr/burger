var express = require("express");
var connection = require("../config/connection");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        dataToDisplay = data.slice(Math.max(data.length - 10, 1));
        res.render("index", { burgers: dataToDisplay });
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