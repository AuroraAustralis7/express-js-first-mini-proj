const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.render("mylife", {source: "artemis2.webp"})
})

router.get("/ryangosling", (req, res) => {
    res.render("ryangosling", {source: "/ryan_gosling2.webp"})
})

module.exports = router;