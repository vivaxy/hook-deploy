/**
 * @since 2016-10-04 13:41
 * @author vivaxy
 */

/** 
 * log levels
 ALL
 TRACE
 DEBUG
 INFO
 WARN
 ERROR
 FATAL
 OFF
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
