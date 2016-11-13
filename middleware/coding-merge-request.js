/**
 * @since 2016-10-05 09:31
 * @author vivaxy
 */

const validRequest = require('../library/valid-request');
const requestConfig = require('../config/coding-merge-request');
const runScript = require('../library/run-script');

const script = './scripts/coding.sh';

module.exports = function *(next) {

    const request = this.request;
    const response = this.response;

    if (validRequest(requestConfig, request)) {
        runScript(script)((err, code) => {
        });
        response.status = 200;
    } else {
        yield next;
    }

};
