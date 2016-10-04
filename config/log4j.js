/**
 * @since 2016-10-04 13:41
 * @author vivaxy
 */

module.exports = {
    appenders: [
        {
            type: 'console',
            level: 'ALL',
        },
        {
            type: 'file',
            filename: '/data/logs/hook-deploy/default.log',
            maxLogSize: 20480,
            level: 'ALL',
        }
    ],
};
