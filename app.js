const express = require('express');
const Message = require('./src/models/Message');
const mongoose = require('./src/database.js');

var app = express();

//Connect databse
mongoose.connect();



app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/message', (req, res, next) => {
  const newMessage = new Message({
    address: req.body.address,
    img: req.body.img,
    body: req.body.body,
  });
  newMessage.save((err) => {
    if (err) {
      res.json({
        default: "fail",
        data: {},
        message: "errror",
      });
    } else {
      res.json({
        default: "OK",
        data: {
          address: req.body.address,
          img: req.body.img,
          body: res.body.body,
        },
        message: "susscess",
      })
    }
  });
});

// module.exports = app;
app.listen(3000);