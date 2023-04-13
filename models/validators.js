const logValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("captainName") &&
        req.body.hasOwnProperty("title") &&
        req.body.hasOwnProperty("post")) {
        next()
    } else if (!req.body.url || !req.body.name) {
        return res.status(400).json({ "error": " Logs cannot be empty " })
    } else {
        return res.status(400).json({ "error": "Logs must contain a url and a name" })
    }
};

module.exports = { logValidator };