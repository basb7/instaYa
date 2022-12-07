const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    date: {type: Date, required: true},
    large: {type: Number, required: true},
    wide: {type: Number, required: true},
    tall: {type: Number, required: true},
    wight: {type: Number, required: true},
    cityShipping: {type: String, required: true},
    addressShipping: {type: String, required: true},
    nameDestination: {type: String, required: true},
    identification: {type: Number, require: true},
    status: {type: String, required: true}
})

module.exports = mongoose.model('Order', Order);