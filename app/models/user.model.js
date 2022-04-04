const mongoose = require('mongoose');
const {sha1} = require('./utils/Util');

const sha1Pwd = (pwd) => {
    return sha1(pwd);
}

const name = (firstname, lastname) => `${firstname} ${lastname}`;

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    name: {
        type: String,
        get: name
    },
    dateOfBorn: Date,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        set: sha1Pwd
    },
    role: {
        type: String,
        default: "1"
    },
    token: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);