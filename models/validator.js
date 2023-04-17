const logsValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("captainName") && req.body.hasOwnProperty("title") && req.body.hasOwnProperty("post") && req.body.hasOwnProperty("mistakesWereMadeToday") && req.body.hasOwnProperty("title") && req.body.hasOwnProperty("post") && req.body.hasOwnProperty("daysSinceLastCrisis")) {
        next();
    } else {
        return res
            .status(400)
            .json({ error: "Log must contain a captainName and a title" });
    }
};

module.exports = { logsValidator };
