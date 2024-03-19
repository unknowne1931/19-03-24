const mongoose = require('mongoose');

const WaitSchema = new mongoose.Schema({
    Time : String,
    username : String,
    ip : String
});

module.exports = mongoose.model('Wait', WaitSchema);