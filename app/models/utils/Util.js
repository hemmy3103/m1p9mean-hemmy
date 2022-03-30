const jwt = require("jsonwebtoken");


exports.sha1 = (hash) => {
    var sha1 = require("sha1");
    return sha1(hash);
};

exports.generateToken = (user) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        user: user,
    };
    const token = jwt.sign(data, jwtSecretKey);
    return token;
};

exports.checkToken = (req) => {
    const CustomException = require("./CustomException.js");
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    const token = req.header(tokenHeaderKey);
    try {
        const isValid = jwt.verify(token, jwtSecretKey);
        return {
            isValid: isValid,
            token: token,
        };
    } catch (error) {
        throw new CustomException(
            500,
            `This token ${token} is not valide`,
            error.message
        );
    }
};
