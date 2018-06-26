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