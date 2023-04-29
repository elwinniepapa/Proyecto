const { validationResult } = require('express-validator')

const validatorMiddleware = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        res.status(400).json({ errors: errors.array() });        
    }
    else
    {
        next();
    }
}

module.exports = validatorMiddleware;