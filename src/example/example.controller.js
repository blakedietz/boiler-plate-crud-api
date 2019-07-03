const uuid = require("uuid/v1");

class ExampleController {
  /**
   * @param {dynamoose.model} dbConnection A dynamoose instance.
   * @param {winston.Logger} logger A winston logging instance.
   */
  constructor({ dbConnection, logger }) {
    this.dbConnection = dbConnection;
    this.logger = logger;
  }

  async create({ text }) {
    return this.dbConnection.create({
      id: uuid(),
      text,
      createdAt: Date().now(),
      updatedAt: Date().now()
    });
  }

  async get(id) {
    return this.dbConnection.get(id);
  }

  async getAll() {
    return this.dbConnection.scan().exec();
  }

  async update({ text }) {
    return this.dbConnection.update(id, {
      text,
      updatedAt: Date().now()
    });
  }
}

module.exports = ExampleController;
