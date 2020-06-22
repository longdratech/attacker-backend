const express = require('express')
var router = express.Router();
var Message = require("../src/models/Message");

router.post('/create_message', (req, res, next) => {
  const newMessage = new Message({
    message: [
      {
        address: req.body.address,
        body: [req.body.body],
      }
    ]
  });

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
            body: [req.body.body]
          }]  
        },
        message: "success"
      });
    }
  });
});

module.exports = router;