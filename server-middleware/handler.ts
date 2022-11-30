const bodyParser = require("body-parser");
const app = require("express")();
const languages = require("./languages").default;

app.use(bodyParser.json());

languages(app);

module.exports = app;
