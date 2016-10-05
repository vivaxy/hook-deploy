/**
 * @since 2016-10-05 09:29
 * @author vivaxy
 */

const log4js = require('log4js');

const log4jsConfig = require('../config/log4js');

log4js.configure(log4jsConfig);

const logger = log4js.getLogger();

module.exports = logger;
