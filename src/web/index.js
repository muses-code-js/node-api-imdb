
module.exports = (core, database) => ({
	start: () => {
		const app = require('./app')(core, database);

		app.listen(3000, () => console.log('Example app listening on port 3000!'));	
	}
})