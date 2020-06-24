const Message = require('../models/message');

exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

exports.message_create = function (req, res) {

  let messages = new Message({
    message: req.body.message,
  });

  console.log(`long ${req.body.message.address}`)

  messages.save((err) => {
    if (err) {
      console.log("Loi create message db")
    }
    res.send('Product Created successfully')
  });
}
