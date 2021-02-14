const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    interests: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);