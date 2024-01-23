const { StatusCodes } = require('http-status-codes');
const Validators = require('../validators');

const validator = (validatorName) => {
    const ERROR = StatusCodes;

    if (!Validators.hasOwnProperty(validatorName))
        throw new Error(`'${validatorName}' validator does not exist`);

    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    return async function (req, res, next) {
        try {
            await Validators[validatorName].validateAsync(req.body, options)
            next();
        } catch (err) {
            if (err.isJoi)
                return next(res.status(ERROR.UNPROCESSABLE_ENTITY).json({ message: `Validation error: ${err.details.map(x => x.message).join(', ')}` }));
            next(res.status(ERROR.INTERNAL_SERVER_ERROR).json({ message: err.message || "Invalid request data. Please review the request and try again." }));
        }
    };
}

module.exports = validator;