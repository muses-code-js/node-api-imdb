const createMovie = require('./create-movie');

describe('create movie', () => {
  test('requires a movie with a title', () => {
    const movie = {
      title: '',
      description: 'A long time ago in a galaxy far far away...'
    }

    const database = {}
    const result = createMovie(database)(movie);
  
    expect(result.status).toBe('Movie title is required');
  });

  test('requires a movie with a description', () => {
    const movie = {
      title: 'Star Wars',
      description: ''
    }

    const database = {}

    const result = createMovie(database)(movie);
  
    expect(result.status).toBe('Movie description is required');
  });

  test('creates a movie', () => {
    const database = {
      save: () => ({
        id: 2
      })
    }

    const databaseSaveSpy = jest.spyOn(database, 'save');

    const movie = {
      title: 'Star Wars',
      description: 'A long time ago in a galaxy far far away...'
    }

    const result = createMovie(database)(movie);

    expect(databaseSaveSpy).toHaveBeenCalledWith(movie);

    expect(result.movie.title).toBe(movie.title);
    expect(result.movie.description).toBe(movie.description);
    expect(result.movie.id).toBe(2);
    expect(result.status).toBe('successfully added movie');
  });
});