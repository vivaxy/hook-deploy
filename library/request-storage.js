/**
 * @since 2016-10-04 21:15
 * @author vivaxy
 */

const isSameObject = require('./valid');

let savedRequest = {};
let savedResult = null;

const isRetry = (request) => {
    // omit duplication
    if (!isSameObject(savedRequest, request)) {
        savedRequest = JSON.parse(JSON.stringify(request));
        savedResult = null;
    }
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
