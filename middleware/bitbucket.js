/**
 * @since 2016-10-05 09:31
 * @author vivaxy
 */

const validRequest = require('../library/valid-request');
const requestStorage = require('../library/request-storage');
const bitbucketConfig = require('../config/bitbucket');
const runScript = require('../library/run-script');

const isRetry = requestStorage.isRetry;
const saveResult = requestStorage.saveResult;
const getResult = requestStorage.getResult;

module.exports = function * () {

    const request = this.request;
    const response = this.response;

    if (validRequest(bitbucketConfig, request)) {

        let code = null;

        if (isRetry(request.body)) {
            code = getResult();
        } else {
            const code = yield runScript;
            saveResult(code);
        }

        switch (code) {
            case null:
                break;
            case 0:
                response.status = 200;
                response.body = JSON.stringify({
                    code: code,
                });
                break;
            default:
                response.status = 500;
                break;
        }
    }

};
