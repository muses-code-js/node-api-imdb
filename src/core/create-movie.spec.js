const createMovie = require('./create-movie');

describe('create movie', () => {
  test('requires a movie with a title', () => {
    const movie = {
      title: '',
      description: 'A long time ago in a galaxy far far away...'
    }
    
    const result = createMovie(movie);
  
    expect(result).toBe('Movie title is required');
  });

  test('requires a movie with a description', () => {
    const movie = {
      title: 'Star Wars',
      description: ''
    }
    
    const result = createMovie(movie);
  
    expect(result).toBe('Movie description is required');
  });
});