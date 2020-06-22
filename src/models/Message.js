const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    // message: String,
    // body: String
    message: [
        {
            address: String,
            body: [String],
        }
    ]
});

module.exports = mongoose.model('Message', messageSchema);