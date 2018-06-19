module.exports = (database) => ({ title, description }) => {
  if (!title) {
    return 'Movie title is required';
  }

  if (!description) {
    return 'Movie description is required';
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