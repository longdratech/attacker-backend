const express = require('express')
var router = express.Router();
var Message = require("../src/models/message.model");

router.post('/create_message', (req, res, next) => {
  const newMessage = new Message({
    message: [
      {
        address: req.body.address,
        body: [req.body.content],
      }
    ]
  });
  console.log(`long ========== ${req.body.content}`)
  newMessage.save((err) => {
    if (err) {
      res.json({
        result: "failure",
        data: {},
        message: `error is: ${err}`,
      })
      
    } else {
      res.json({
        result: "ok",
        data: {
          message: [{
            address: req.body.address,
            body: [req.body.content]
          }]  
        },
        message: "success"
      });
    }
  });
});

module.exports = router;