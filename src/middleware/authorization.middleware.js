const authorizationMiddleware = (req, res, next) => {
    console.log('todo implement');
  // if () {
  //   res.status(403);
  //   res.end();
  // }
  next();
};

module.exports = authorizationMiddleware;
