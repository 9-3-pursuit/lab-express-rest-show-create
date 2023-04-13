const logsValidator = (req, res, next) => {
    if(req.body.hasOwnProperty("captainName") && req.body.hasOwnProperty("title")){
        next()
    }else {
        res.status(400).json({error: "logs must contain a captainName and a title"})    }
};
 module.exports = { logsValidator };