const asyncErrorMiddleWare = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next).catch(next));

module.exports = asyncErrorMiddleWare;
