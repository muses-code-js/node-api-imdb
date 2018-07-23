const core = require('./core');
const web = require('./web')(core);

web.start();