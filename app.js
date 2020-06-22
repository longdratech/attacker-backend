const express = require('express');
const Message = require('./src/models/Message');
const mongoose = require('./src/database.js');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

var app = express();

mongoose.connect();


app.get('/', function (req, res) {
  res.send('hello world');
});

app.use(bodyParser.json());

app.use(routes);

// app.post('/create', (req, res, next) => {
//   var newMess = new Message({
//     message: req.body.message,
//     body: req.body.body,
//   });

  // console.log(`long ${newMess}`)

  // newMess.save((err) => {
  //   if(err) {
  //     res.json({
  //       result: "failure",
  //       data: {},
  //       message: `error is: ${err}`,
  //     })
  //   } else {
  //     res.json({
  //       result: "success",
  //       data: {
  //         message: req.body.message,
  //         body: req.body.body
  //       },
  //       message: `success`,
  //     })
  //     console.log(res.json);
  //   }
  // })
// })

module.exports = app;