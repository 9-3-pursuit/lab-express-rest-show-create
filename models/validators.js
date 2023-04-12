const logValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("captainName") && req.body.hasOwnProperty("title") && req.body.hasOwnProperty("post")) {
        next();
    } else if (!req.body.captainName || !req.body.title || !req.body.post) {
        res.status(400).json({error: "Log cannot contain empty string"})
    } else {
        res.status(400).json({error: "Log must contain a name, title, and post"});
        
    }
}

module.exports = logValidator;
