const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    gender: String,
    age: Number,
    email: {
        type: String,
        unique: true
    },
    // Due to time limitations, password will be handled as plain text
    password: String,
    preferences: {
        favorite_brand: String,
        favorite_model: String
    }
});

module.exports = mongoose.model('User', UserSchema);