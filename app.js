require("dotenv").config();
require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);
require('./config/session.confi')(app)

app.locals.appTitle = "Soccer Spotlight ⚽️"

require('./routes/')(app)

require("./error-handling")(app);

module.exports = app;