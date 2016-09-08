/**
 * @since 2016-09-08 16:10
 * @author vivaxy
 */

const validRequest = require('../library/valid');

console.log(validRequest({
    a: 1,
    b: {
        c: 'd'
    }
}, {
    a: 1,
    b: {
        c: 'd',
        e: 'f'
    }
}));
