/**
 * @since 2016-11-13 21:12
 * @author vivaxy
 */

const validRequest = require('../library/valid-request');
const requestConfig = require('../config/coding-ping');

module.exports = function *(next) {

    const request = this.request;
    const response = this.response;

    if (validRequest(requestConfig, request)) {
        response.status = 200;
    } else {
        yield next;
    }

};
