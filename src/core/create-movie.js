module.exports = (database) => async ({ title, description }) => {
  if (!title && !description) {
    return {
      status: 'Movie title and description are required'
    };
  }
  
  if (!title) {
    return {
      status: 'Movie title is required'
    };
  }

  if (!description) {
    return {
      status: 'Movie description is required'
    };
  }
  
  const movies = await database.getAll();
  const isDuplicatedMovie = movies.some((movie) => movie.title === title);

  if (isDuplicatedMovie) {
    return {
      status: 'Movie already exist'
    }
  }

  const { id } = await database.save({ title, description });
  
  return {
    movie: {
      id,
      title,
      description
    },
    status: 'successfully added movie'
  }
}