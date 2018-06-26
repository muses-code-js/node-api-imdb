const express = require('express');
const app = express();

app.post('/movie', (req, res) => {
  res.send(201, {
    movie: {
      title: 'Star Wars',
      description: 'Description...',
    },
    status: 'successfully added movie'
  });
});

module.exports = app;