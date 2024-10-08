const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    contactNo: {
        type: Number,
        required: true,
    },
    address: [{
        type: String,
        required: true,
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;