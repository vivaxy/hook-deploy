/**
 * @since 2016-08-29 10:46
 * @author vivaxy
 */

const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const child_process = require('child_process');

const spawn = child_process.spawn;
const app = koa();

const PORT = 3000;
const DATA_EVENT = 'data';
const CLOSE_EVENT = 'close';
const HOOK_DEPLOY_PATH = '/hooks/deploy';
const HOOK_DEPLOY_SCRIPT_FILE = './script/hook-deploy.sh';

const run = (done) => {

    const deploy = spawn('sh', [HOOK_DEPLOY_SCRIPT_FILE]);

    deploy.stdout.on(DATA_EVENT, (data) => {
        console.log(`stdout: ${data}`);
    });

    deploy.stderr.on(DATA_EVENT, (data) => {
        console.log(`stderr: ${data}`);
    });

    deploy.on(CLOSE_EVENT, (code) => {
        console.log(`child process exited with code ${code}`);
        done(null, code);
    });
};

app.use(bodyParser());

app.use(function * () {

    const request = this.request;
    const response = this.response;

    console.log(`request.path: ${request.path}`);
    console.log(`request.method: ${request.method}`);
    console.log(`request.headers: ${JSON.stringify(request.headers)}`);
    console.log(`request.query: ${JSON.stringify(request.query)}`);
    console.log(`request.body: ${JSON.stringify(request.body)}`);

    if (request.path === HOOK_DEPLOY_PATH) {

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
