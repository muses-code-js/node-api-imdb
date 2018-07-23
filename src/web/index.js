
module.exports = core => {
	const app = require('./app')(core);

	app.listen(3000, () => console.log('Example app listening on port 3000!'));	
}