/**
 * @since 2016-10-04 21:46
 * @author vivaxy
 */

const objectEquals = require('../library/object-equals');

console.log(
    objectEquals(
        JSON.parse(`{}`),
        JSON.parse(`{}`)
    )
);
