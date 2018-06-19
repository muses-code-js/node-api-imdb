module.exports = ({ title, description }) => {
  if (!title) {
    return 'Movie title is required';
  }

  if (!description) {
    return 'Movie description is required';
  }

  return {
    movie: {
      id: '1',
      title,
      description
    },
    status: 'successfully added movie'
  }
}