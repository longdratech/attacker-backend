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
const message = mongoose.model('Message', messageSchema);
message.create({
    address: "asdasd",
    img: "asdasd",
    body: "asd",
});
module.exports = mongoose.model('Message', messageSchema);