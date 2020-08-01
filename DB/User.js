const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

module.exports = user;