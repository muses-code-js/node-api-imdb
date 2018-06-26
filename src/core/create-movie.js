module.exports = (database) => ({ title, description }) => {
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

  const isDuplicatedMovie = database.getAll().some((movie) => movie.title === title);

  if (isDuplicatedMovie) {
    return {
      status: 'Movie already exist'
    }
  }

  const { id } = database.save({ title, description });

  return {
    movie: {
      id,
      title,
      description
    },
    status: 'successfully added movie'
  }
}