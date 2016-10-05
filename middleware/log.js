/**
 * @since 2016-10-05 09:16
 * @author vivaxy
 */

const logger = require('../library/log4js');

module.exports = function * (next) {

    const request = this.request;
    
    const beginTime = new Date().getTime();

    logger.debug(`request.path: ${request.path}`);
    logger.debug(`request.method: ${request.method}`);
    logger.debug(`request.headers: ${JSON.stringify(request.headers)}`);
    logger.debug(`request.query: ${JSON.stringify(request.query)}`);
    logger.debug(`request.body: ${JSON.stringify(request.body)}`);

    yield next;
    
    const endTime = new Date().getTime();
    const cost = endTime - beginTime;
    logger.info(`respond in ${cost}ms`);

};
