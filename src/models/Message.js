const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let bodyContent = new Schema({
  address: String,
  content: []
})

let MessageSchema = new Schema({
    message: String,
})

module.exports = mongoose.model('Message', MessageSchema);