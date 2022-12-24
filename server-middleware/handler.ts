const bodyParser = require("body-parser");
const app = require("express")();
const languages = require("./languages").default;
const lessons = require("./lessons").default;

app.use(bodyParser.json());

languages(app);
lessons(app);

module.exports = app;
