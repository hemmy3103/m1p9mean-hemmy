const { gen } = require("../models/utils/Generic");
const User = require("./../models/user.model");
const Role = require("../models/role.model");
const {
    sha1,
    generateToken,
    handleError,
    checkToken,
} = require("../models/utils/Util");

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }, function (err, user) {
        if (!user)
            handleError(
                res,
                "Your email or / and password not correct, please verify"
            );
        else {
            if (user.password === sha1(password)) {
                const token = generateToken(user.name);
                User.findByIdAndUpdate(user._id, {
                    token: token,
                })
                    .then((data) => {
                        res.send({
                            status: 200,
                            message: "Success",
                            data: {
                                token: token,
                            },
                        });
                    })
                    .catch((err) => {
                        handleError(res, err.message);
                    });
            } else {
                handleError(res, "Incorrect password");
            }
        }
    });
};

exports.save = (req, res) => {
    gen.save(User, res, req);
};

exports.logout = (req, res) => {
    try {
        const metadata = checkToken(req);
        const token = metadata.token;
        User.findOne({ token: token }, function (err, user) {
            if (!user) handleError(res, "Token not found, please verify");
            else {
                User.findByIdAndUpdate(user._id, {
                    token: null,
                })
                    .then((data) => {
                        res.send({
                            status: 200,
                            message: "Disconnected",
                            data: {
                                token: token,
                            },
                        });
                    })
                    .catch((err) => {
                        handleError(res, err.message);
                    });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.getInfo = (req, res) => {
    try {
        const metadata = checkToken(req);
        const token = metadata.token;
        User.findOne({ token: token }, function (err, user) {
            if (!user) handleError(res, "Token not found, please verify");
            else {
                console.log('user', user.name)
                Role.findOne({code: user.role}, function(err, role){
                    if (err) handleError(res, err.message);
                    else {
                        res.send({
                            status: 200,
                            message: "Success",
                            data: {
                                username: user.name,
                                role: role.display
                            },
                        });
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

// const findByIdCustom = (data, res) => {
//     User.findById(data.isValid.userId, function (err, user) {
//         if (err) {
//             res.status(500).send(
//                 new CustomException(1003, `Some error appears`, err.message)
//             );
//         } else if (user == null) {
//             res.status(500).send(
//                 new CustomException(
//                     1001,
//                     `User with _id:${data.isValid.userId} not found.`
//                 )
//             );
//         } else {
//             res.send(user);
//         }
//     });
// };

// exports.findAll = (req, res) => {
//     gen.findAll(User, res);
// };

// exports.find = (req, res) => {
//     gen.find(User, res, req.body);
// };

// exports.findById = (req, res) => {
//     gen.findById(User, res, req.params.userId);
// };

// exports.findByIdAndUpdate = (req, res) => {
//     gen.findByIdAndUpdate(User, res, req.params.userId, req);
// };

// exports.findByIdAndRemove = (req, res) => {
//     gen.findByIdAndRemove(User, res, req.params.userId);
// };
