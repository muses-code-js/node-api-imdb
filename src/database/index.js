const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-api-imdb', { useNewUrlParser: true });

const Movies = mongoose.model('Movie', new mongoose.Schema({
	title: String,
	description: String
}));

module.exports = {
	save: async ({ title, description }) => {
		const movie = await Movies.create({ title, description });
		return { id: movie._id };
	},
	getAll: async () => {
		const results = await Movies.find()
			.then(res => res.json())
			.then(movie => console.log(movie));

		return results;
	}
}
