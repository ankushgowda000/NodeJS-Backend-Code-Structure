const { jwt: { jwtVerify } } = require("../helper")
const { StatusCodes } = require('http-status-codes');

const auth = () => {
    const ERROR = StatusCodes;
    return async function (req, res, next) {
        const token = req.header("Authorization");

        if (!token) {
            next(res.status(ERROR.UNAUTHORIZED).json({ message: "Token is Required" }));
        }

        try {
            const decoded = jwtVerify(token);
            if (!req.body) {
                req.body = {};
            }
            req.body.currentUser = decoded;
            next()
        } catch (err) {
            const errorMessage = err.message === "jwt expired" ? err.message : "Invalid token";
            next(res.status(ERROR.UNAUTHORIZED).json({ message: errorMessage }));
        }
    }
}

module.exports = auth;