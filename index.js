const express = require("express");
const path = require("path");
const  PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (request, response) {
  response.render("pages/index");
});
app.set("views", path.join(__dirname, "views")); // declare a directory for all the template files

app.set("view engine", "ejs");

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
