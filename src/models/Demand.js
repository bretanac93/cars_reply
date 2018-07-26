const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DemandSchema = new Schema({
    pickup_date: Date,
    dropoff_date: Date,
    pickup_location: {
        latitude: Number,
        longitude: Number
    },
    dropoff_location: {
        latitude: Number,
        longitude: Number
    },
    user: { type: Schema.ObjectId, ref: 'UserSchema' },
    car: { type: Schema.ObjectId, ref: 'CarSchema' },
});

module.exports = mongoose.model('Demand', DemandSchema);