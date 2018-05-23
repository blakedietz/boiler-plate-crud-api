const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const inks = require("./controllers/foos.controller");

app.use(morgan("combined"));
app.use(cors());

app.use(bodyParser.json({ strict: false }));

app.use("/v1/foos", inks);

module.exports.handler = serverless(app);
