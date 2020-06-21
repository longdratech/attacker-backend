const express = require('express');
const Message = require('./src/models/Message');
const app = express();
const port = 3000;
const url = 'https://attacker-kma.herokuapp.com/';
app.get('https://attacker-kma.herokuapp.com/', function (req, res) {
  res.send('hello world');
});

app.post('https://attacker-kma.herokuapp.com/message', (req, res, next) => {
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
          name: req.body.address,
          body: res.body.body,
        },
        message: "susscess",
      })
    }
  });
});

app.listen(port, () => console.log('asdadsd'));