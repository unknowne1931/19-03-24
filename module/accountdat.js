const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    Time : String,
    username : String,
    upi : String,
    name: String,
    Ru : String,
    IP : String
});

module.exports = mongoose.model('Account', AccountSchema);