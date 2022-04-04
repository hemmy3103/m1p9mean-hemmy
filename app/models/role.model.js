const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    display: String,
    code: {
        type: String,
        unique: true,
    },
});

module.exports = mongoose.model('Role', RoleSchema);