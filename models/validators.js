const logValidator = (req, res, next) => {

    if(req.body.hasOwnProperty("captainName") && req.body.hasOwnProperty("title")){
        next()
    } else if (!req.body.captainName || !req.body.title){
        return res.status(400).json({error: "Logs must contain a captainName and a title"})
    } else {
        return res.status(400).json({error: "Sends a redirect when an invalid index is given"})
    
      }
    };
    
      module.exports = { logValidator };