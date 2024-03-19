const mongoose = require('mongoose');

const LimitSchema = new mongoose.Schema({
    Time : String,
    username : String,
    way : String,
});

module.exports = mongoose.model('Limit', LimitSchema);