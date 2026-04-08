const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.render("interests",  {source: "zhou_enlai.jpg"})
})

module.exports = router;