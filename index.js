/**
 * @since 2016-08-29 10:46
 * @author vivaxy
 */

const koa = require('koa');
const child_process = require('child_process');

const spawn = child_process.spawn;
const app = koa();

const PORT = 3000;
const HOOK_DEPLOY_PATH = '/hooks/deploy';
const HOOK_DEPLOY_SCRIPT_FILE = './script/hook-deploy.sh';

const run = (done) => {

    const deploy = spawn('sh', [HOOK_DEPLOY_SCRIPT_FILE]);

    deploy.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    deploy.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    deploy.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        done(null, code);
    });
};

app.use(function * () {

    const request = this.request;
    const response = this.response;
    
    console.log(`request.path: ${request.path}`);
    
    if (request.path === HOOK_DEPLOY_PATH) {

        const code = yield run;

        if (code === 0) {
            response.status = 204;
        } else {
            response.status = 500;
        }
    }

});

app.listen(PORT);
