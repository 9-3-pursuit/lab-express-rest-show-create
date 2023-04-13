const logsValidator = (req, res, next) => {
    if (req.body.hasOwnProperty('title') && req.body.hasOwnProperty('captainName')) {
        next()
      } else {
        return res.status(400).json({error : "Logs must contain a title and a captainName"})
      }
};

module.exports = {logsValidator}