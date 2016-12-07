/**
 * @since 2016-10-05 09:29
 * @author vivaxy
 */

const fse = require('fs-extra');
const log4js = require('log4js');

const log4jsConfig = require('../config/log4js');

fse.ensureFileSync(log4jsConfig.logFile);

log4js.configure(log4jsConfig);

const logger = log4js.getLogger();

module.exports = logger;
