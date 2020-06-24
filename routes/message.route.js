const express = require('express');
const router = express.Router();

const message_controller = require('../src/controllers/message');

router.get('/test', message_controller.test);

router.post('/create-message', message_controller.message_create);


module.exports = router;