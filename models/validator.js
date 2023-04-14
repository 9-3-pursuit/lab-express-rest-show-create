const logsValidator = (req, res, next) => {
    const validationRule = {
        "captainName": "required|string",
        "title": "string",
        "post": "string",
        "mistakesWereMadeToday": Boolean,
        "daysSinceLastCrisis": Number,
    };    

    if (!validationRule){
        res.status(400).json({error: "Logs not complete"})
    }else {
        next();
    }
}
    
  

module.exports = { logsValidator }