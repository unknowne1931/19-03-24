const mongoose = require('mongoose');

const ErrorSchema = new mongoose.Schema({
    Time : String,
    name: String,
    username : String
});

module.exports = mongoose.model('Error', ErrorSchema);