const Joi = require("joi");
let vogels = require("vogels");

module.exports = ({ tableName, accessKeyId, secretAccessKey }) => {
  const FOO_TABLE = tableName;
  const Foo = vogels.define("DataScienceFoo", {
    hashKey: "fooId",

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    schema: {
      fooId: vogels.types.uuid(),
      email: Joi.string().email(),
      rating: Joi.number()
        .integer()
        .min(0)
        .max(5),
      fooText: Joi.string()
    },

    tableName: FOO_TABLE
  });

  vogels.AWS.config.update({
    accessKeyId,
    secretAccessKey,
    region: "us-west-2"
  });

  return Foo;
};
