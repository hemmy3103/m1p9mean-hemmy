const { gen } = require("../models/utils/Generic");
const User = require("./../models/user.model");

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }, function (err, user) {
        if (user.password === password) {
            User.findByIdAndUpdate(user._id, {
                token: generateToken(user.name),
            })
                .then((data) => {
                    res.send(data);
                })
                .catch((err) => {
                    res.status(500).send({
                        message: err.message,
                    });
                });
        } else {
            console.log("incorrecte");
            res.status(500).send({
                status: 500,
                message: "Some field are incorrect",
            });
        }
    });
};

exports.save = (req, res) => {
    req.body.status = 1;
    gen.save(User, res, req);
};

// exports.logout = (req, res) => {
//     try {
//         const metadata = checkToken(req);
//         Token.logout(metadata.isValid.userId);
//         res.send(`Delete ${metadata.isValid.userId}`);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// };

// exports.getInfo = (req, res) => {
//     try {
//         const metadata = checkToken(req);
//         const user = findByIdCustom(metadata, res);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// };

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
