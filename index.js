/**
 * @since 2016-08-29 10:46
 * @author vivaxy
 */

const koa = require('koa');
const log4js = require('log4js');
const bodyParser = require('koa-bodyparser');
const child_process = require('child_process');

const validRequest = require('./library/valid');
const bitbucketConfig = require('./config/bitbucket');
const log4jConfig = require('./config/log4j');

const spawn = child_process.spawn;
const app = koa();
log4js.configure(log4jConfig);
const logger = log4js.getLogger();

const PORT = 3000;
const DATA_EVENT = 'data';
const CLOSE_EVENT = 'close';
const HOOK_DEPLOY_SCRIPT_FILE = './script/hook-deploy.sh';

const run = (done) => {

    const deploy = spawn('sh', [HOOK_DEPLOY_SCRIPT_FILE]);

    deploy.stdout.on(DATA_EVENT, (data) => {
        logger.debug(`stdout: ${data}`);
    });

    deploy.stderr.on(DATA_EVENT, (data) => {
        logger.debug(`stderr: ${data}`);
    });

    deploy.on(CLOSE_EVENT, (code) => {
        logger.debug(`child process exited with code ${code}`);
        done(null, code);
    });
};

app.use(bodyParser());

app.use(function * () {

    const request = this.request;
    const response = this.response;

    logger.debug(`request.path: ${request.path}`);
    logger.debug(`request.method: ${request.method}`);
    logger.debug(`request.headers: ${JSON.stringify(request.headers)}`);
    logger.debug(`request.query: ${JSON.stringify(request.query)}`);
    logger.debug(`request.body: ${JSON.stringify(request.body)}`);

    if (validRequest(bitbucketConfig, request)) {

        const code = yield run;

        if (code === 0) {
            response.status = 200;
            response.body = '{}';
        } else {
            response.status = 500;
        }
    }

});

app.listen(PORT);
