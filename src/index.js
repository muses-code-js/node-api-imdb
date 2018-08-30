const core = require('./core');
const database = require('./database');
const web = require('./web')(core, database);

web.start();