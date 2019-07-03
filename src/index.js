const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const exampleRoutes = require("./example/example.routes");
const requestLogger = require("./logging/request.logger");
const errorLogger = require("./logging/error.logger");
const authorizationMiddleware = require("./middleware/authorization.middleware");

app.use(requestLogger);
app.use(cors());
app.use(bodyParser.json({ strict: false }));
app.use(authorizationMiddleware);
app.use("/v1/example", exampleRoutes);
app.use(errorLogger);

module.exports.handler = serverless(app);
