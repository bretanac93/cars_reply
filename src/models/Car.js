const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    brand: String,
    model: String,
    engine: String,
    interior_design: String,
    infotainment_system: String,
    location: {
        latitude: Number,
        longitude: Number
    },
    minute_price: Number,
    picture: String
});

module.exports = mongoose.model('Car', CarSchema);