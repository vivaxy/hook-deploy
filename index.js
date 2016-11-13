/**
 * @since 2016-08-29 10:46
 * @author vivaxy
 */

const koa = require('koa');
const bodyParser = require('koa-bodyparser');

const logMiddleware = require('./middleware/log');
const bitbucketPullRequest = require('./middleware/bitbucket-pull-request');
const codingMergeRequest = require('./middleware/coding-merge-request');
const codingPing = require('./middleware/coding-ping');

const app = koa();

const PORT = 3000;

app.use(bodyParser());
app.use(logMiddleware);
app.use(bitbucketPullRequest);
app.use(codingMergeRequest);
app.use(codingPing);

app.listen(PORT);
