/**
 * @since 2016-09-08 16:10
 * @author vivaxy
 */

const validRequest = require('../library/valid-request');

const request = require('./request.json');

console.log(
    validRequest(
        {
            pullrequest: {
                state: 'MERGED',
                destination: {
                    branch: {
                        name: 'beta'
                    }
                }
            }
        },
        request
    ));
