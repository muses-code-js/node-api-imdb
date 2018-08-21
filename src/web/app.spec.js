const request = require('supertest');
const core = require('../core');
const app = require('./app')(core);

describe('web - app', () => {

  test('creates a movie', async () => {
    const movie = {
      title: 'Star Wars',
      description: 'Description...'
    }

    const response = await request(app)
      .post('/movie')
      .send(movie)
      .set('Accept', 'application/json');

    // expect(response.statusCode).toBe(201);
    expect(response.body.movie.title).toBe('Star Wars');
    expect(response.body.movie.description).toBe('Description...');
  });

  test('does not create a movie', async () => {
    const invalidMovie = {
      title: '',
      description: ''
    }

    const response = await request(app)
      .post('/movie')
      .send(invalidMovie)
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(400);
  });

});