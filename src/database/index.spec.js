const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-api-imdb', { useNewUrlParser: true });

const database = require('./index');

describe('database', () => {
	beforeEach(() => mongoose.connection.collections['movies'].drop());

  test('save movies', async () => {
    const movie = {
      title: 'Star Wars',
      description: 'A long time ago in a galaxy far far away...'
    }
		const savedMovie = await database.save(movie);
		const movies = await database.getAll();

		expect(savedMovie.id).toBeDefined();
		expect(movies[0].title).toBe(movie.title);
		expect(movies[0].description).toBe(movie.description);
	});
});
