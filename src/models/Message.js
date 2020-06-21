const mongoose = require('mongoose');
const { Schema } = mongoose;

const mongoSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    img: {
        type: Image,
        required: false,
    },
    body: {
        type: String,
        required: true,
    }
});

const Message = mongoose.model("Message", mongoSchema);

Message.create({
    address: "UBND TP.HCM",
    body: "phong chong corona",
});