/**
 * @since 2016-10-04 21:46
 * @author vivaxy
 */

const objectEquals = require('../library/object-equals');

console.log(objectEquals({
    a: 1,
    b: {
        c: 'd',
        e: ['f', 'g']
    }
}, {
    a: 1,
    b: {
        c: 'd',
        e: ['f']
    }
}));
