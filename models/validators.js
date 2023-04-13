const logValidator = (req, res, next) => {
  if (
    req.body.hasOwnProperty("captainName") &&
    req.body.hasOwnProperty("title")
  ) {
    next();
  } else if (!req.body.captainName || !req.body.title) {
    return res.status(400).json({ error: "Logs cannot contain empty string" });
  } else {
    return res
      .status(400)
      .json({ error: "logs must contain a captainName and a title" });
  }
};

module.exports = { logValidator };
