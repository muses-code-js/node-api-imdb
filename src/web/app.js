const express = require('express');
const app = express();
const bodyParser = require('body-parser');

module.exports = (core, database) => {
  
  app.use(bodyParser.json());

  app.post('/movie', async (req, res) => {
    const result = await core.createMovie(database)(req.body);

    if (result.movie) {
      res.status(201).send(result);
    } else {
      res.status(400).send(result);
    }
    
  });

  return app;

}