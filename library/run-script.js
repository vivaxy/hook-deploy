/**
 * @since 2016-10-05 09:27
 * @author vivaxy
 */

const child_process = require('child_process');

const logger = require('./log4js');

const spawn = child_process.spawn;

const DATA_EVENT = 'data';
const CLOSE_EVENT = 'close';

module.exports = (script) => {
    return (done) => {

        const beginTime = new Date().getTime();

        const deploy = spawn('sh', [script]);

        deploy.stdout.on(DATA_EVENT, (data) => {
            logger.debug(`stdout: ${data}`);
        });

        deploy.stderr.on(DATA_EVENT, (data) => {
            logger.trace(`stderr: ${data}`);
        });

        deploy.on(CLOSE_EVENT, (code) => {
            const endTime = new Date().getTime();
            const cost = endTime - beginTime;
            logger.info(`script exited with code ${code} in ${cost}ms`);
            done(null, code);
        });
    };
};
