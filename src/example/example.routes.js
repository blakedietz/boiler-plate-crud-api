const express = require("express");
const router = express.Router();
const ExampleController = require("./example.controller");
const exampleTable = require("./example.model")({
  tableName: process.env.EXAMPLE_TABLE
});
const logger = require("../logging/application.logger");
const asyncMiddleWare = require("../middleware/async.middleware");

controller = new ExampleController({
  dbConnection: exampleTable,
  logger
});

router.get(
  "/:id",
  asyncMiddleWare(async ({ params: { id } }, res) => {
    const example = await controller.get(id);
    return res.json(example);
  })
);

router.get(
  "/",
  asyncMiddleWare(async (req, res) => {
    const examples = await controller.getAll();
    return res.json(examples);
  })
);

router.post(
  "/",
  asyncMiddleWare(
    async ({ body: { text} }, res) => {
        return controller.create({text})
    }
  )
);

module.exports = router;
