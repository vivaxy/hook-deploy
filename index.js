/**
 * @since 2016-08-29 10:46
 * @author vivaxy
 */

const koa = require('koa');
const bodyParser = require('koa-bodyparser');

const logMiddleware = require('./middleware/log');
const bitbucketMiddleware = require('./middleware/bitbucket');
const codingMiddleware = require('./middleware/coding');

const app = koa();

const PORT = 3000;

app.use(bodyParser());
app.use(logMiddleware);
app.use(bitbucketMiddleware);
app.use(codingMiddleware);

app.listen(PORT);
