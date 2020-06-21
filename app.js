const express = require('express');
const app = express();
const port = 3000;
const url = 'https://attacker-kma.herokuapp.com/';
app.get('https://attacker-kma.herokuapp.com/', function(req, res) {
  res.send('hello world');
});

app.listen(port, () => console.log('asdadsd'));