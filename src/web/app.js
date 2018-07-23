const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const database = {
  save: () => ({}),
  getAll: () => [{}]
}

module.exports = core => {
  
  app.use(bodyParser.json());

  app.post('/movie', (req, res) => {
    const result = core.createMovie(database)(req.body);

    if (result.movie) {
      res.status(201).send(result);
    } else {
      res.status(400).send(result);
    }
    
  });

  return app;

}