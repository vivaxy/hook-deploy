/**
 * @since 2016-10-04 13:41
 * @author vivaxy
 */

/**
 * log levels
 * @see https://github.com/nomiddlename/log4js-node/blob/master/lib/levels.js#L54
 * ALL: new Level(Number.MIN_VALUE, "ALL"),
 * TRACE: new Level(5000, "TRACE"),
 * DEBUG: new Level(10000, "DEBUG"),
 * INFO: new Level(20000, "INFO"),
 * WARN: new Level(30000, "WARN"),
 * ERROR: new Level(40000, "ERROR"),
 * FATAL: new Level(50000, "FATAL"),
 * MARK: new Level(9007199254740992, "MARK"), // 2^53
 * OFF: new Level(Number.MAX_VALUE, "OFF"),
 */
module.exports = {
    appenders: [
        {
            type: 'console',
        },
        {
            type: 'logLevelFilter',
            level: 'DEBUG',
            appender: {
                type: 'file',
                filename: '/data/logs/hook-deploy/default.log',
            }
        }
    ],
};
