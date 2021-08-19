const express = require('express');
require('dotenv').config()

let iKey = process.env.APPI_KEY
let appInsights = require("applicationinsights");
appInsights.setup(iKey).start();

const app = express();
const port = process.env.PORT;

var indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

