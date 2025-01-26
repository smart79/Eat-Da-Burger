var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function (req, res) {
    res.redirect("/burgers");
});
router.get("/burgers", function (req, res) {
    // express callback response by calling burger.all(selectAllBurgers)
    burger.all(function (burgerData) {
        // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", function (req, res) {
    console.log(req.body)
    burger.create(["burger_name"], [req.body.burger_name], function (result) {
        // put route -> back to index
        res.send("burger added!")
    });
});
router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
    });
});
module.exports = router;