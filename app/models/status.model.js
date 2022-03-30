const mongoose = require('mongoose');

const StatusSchema = mongoose.Schema({
    display: String
});

module.exports = mongoose.model('Status', StatusSchema);