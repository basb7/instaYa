const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {type: String, required: true},
    identification: {type: Number, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    telephone: {type: String, required: true}
})

module.exports = mongoose.model('User', User)