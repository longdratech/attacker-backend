const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let MessageSchema = new Schema({
  message: [
    {
      address: String,
      text: []
    }
  ],
})

module.exports = mongoose.model('Message', MessageSchema);