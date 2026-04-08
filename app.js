// The following are the important express stuff: required for express to function
const express = require("express");
const path = require("path"); // this is used to work with file and directory paths
const app = express();
const PORT = process.env.PORT || 3000;

// routes
const myLifeRoute = require("./routes/myLife")
const interestsRoute = require("./routes/interests")

// EJS setup
app.set("views", path.join(__dirname, "views")); // sets directory for where ejs files are located

app.set("view engine", "ejs");

app.use(express.static("public"))

// home page stuff yes

app.get("/", (req, res) => {
    res.render("homePage", {source: "/ryan_gosling1.jpg", });
})

// my life page stuff

app.use("/mylife", myLifeRoute)
app.use("/interests", interestsRoute)

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
})