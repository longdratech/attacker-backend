const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    body: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Message', messageSchema);