// Get foos endpoint
const express = require("express");
const router = express.Router();

const Foo = require("../models/foo.model")({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  tableName: process.env.FOO_TABLE
});

router.get("/:fooId", function(req, res) {
  const fooId = req.params.fooId;

  Foo.get(fooId, function(err, foo) {
    if (err) {
      console.log(err);
      res.status(400).json({ error: "Could not get foos" });
    }

    if (!foo) {
      // TODO: (bdietz) - throw proper http status code
      res.json({});
    } else {
      res.json(foo);
    }
  });
});

// Get foos endpoint
router.get("/", function(req, res) {
  Foo.scan()
    .loadAll()
    .exec((error, response) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error: "Could not get foos" });
      }

      if (response.Count === 0) {
        res.json([]);
      } else {
        res.json(response.Items);
      }
    });
});

router.post("/", function(req, res) {
  const { fooText, email } = req.body;

  Foo.create(
    {
      fooText,
      email
    },
    function(error, foo) {
      if (error) {
        console.log(error);
        res.status(400).json({ error: "Could not create foos" });
      }

      res.json(foo);
    }
  );
});

module.exports = router;
