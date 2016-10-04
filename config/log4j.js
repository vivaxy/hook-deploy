/**
 * @since 2016-10-04 13:41
 * @author vivaxy
 */

module.exports = {
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'file',
            filename: '/data/logs/hook-deploy/hook-deploy.log',
            maxLogSize: 20480
        }
    ]
};
