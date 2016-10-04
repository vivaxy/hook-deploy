/**
 * @since 2016-10-04 21:15
 * @author vivaxy
 */

const objectEquals = require('./object-equals');

let savedRequest = {};
let savedResult = null;

const isRetry = (request) => {
    const isRetryRequest = objectEquals(savedRequest, request);
    // omit duplication
    if (!isRetryRequest) {
        savedRequest = JSON.parse(JSON.stringify(request));
        savedResult = null;
        return false;
    }
    return isRetryRequest;
};

const saveResult = (result) => {
    savedResult = result;
};

const getResult = () => {
    return savedResult;
};

module.exports = {
    isRetry,
    saveResult,
    getResult,
};
