const mongoose = require('mongoose');

const PaidtSchema = new mongoose.Schema({
    Time : String,
    username : String,
    upi : String,
    name: String,
    ip : String
});

module.exports = mongoose.model('Paid', PaidtSchema);