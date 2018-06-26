const request = require('supertest');
const app = require('./app');

describe('web - app', () => {

  test('POST /movie', async () => {
    const response = await request(app)
      .post('/movie')
      .send({
        title: 'Star Wars',
        description: 'Description...'
      })
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(201);
    expect(response.body.movie.title).toBe('Star Wars');
    expect(response.body.movie.description).toBe('Description...');
    expect(response.body.status).toBe('successfully added movie');
  });

});