const dynamoose = require("dynamoose");

module.exports = ({ tableName }) => {
  dynamoose.AWS.config.update({
    region: "us-west-2"
  });

  const Example = dynamoose.model(tableName, {
    id: String,
    text: String
  });

  return Example;
};
