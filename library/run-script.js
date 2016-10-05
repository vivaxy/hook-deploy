/**
 * @since 2016-10-05 09:27
 * @author vivaxy
 */

const child_process = require('child_process');

const logger = require('./log4js');

const spawn = child_process.spawn;

const DATA_EVENT = 'data';
const CLOSE_EVENT = 'close';
const HOOK_DEPLOY_SCRIPT_FILE = '../script/hook-deploy.sh';

module.exports = (done) => {

    const deploy = spawn('sh', [HOOK_DEPLOY_SCRIPT_FILE]);

    deploy.stdout.on(DATA_EVENT, (data) => {
        logger.debug(`stdout: ${data}`);
    });

    deploy.stderr.on(DATA_EVENT, (data) => {
        logger.trace(`stderr: ${data}`);
    });

    deploy.on(CLOSE_EVENT, (code) => {
        logger.debug(`child process exited with code ${code}`);
        done(null, code);
    });
};
