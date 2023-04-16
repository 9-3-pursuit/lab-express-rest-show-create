const logValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("Logged") && req.body.hasOwnProperty("Result")) {
      next();
    } else {
      return res
        .status(400)
        .json({ error: "Logs must contain a Logged and a Result" });
    }
  };
  
  module.exports = { logValidator };