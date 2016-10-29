/**
 * @since 2016-10-04 21:45
 * @author vivaxy
 */

const objectEquals = (base, target) => {

    const baseKeyList = Object.keys(base);
    const targetKeyList = Object.keys(target);

    if (baseKeyList.length !== targetKeyList.length) {
        return false;
    }

    return baseKeyList.every((key) => {
        if (base[key] && typeof base[key] === 'object') {
            // array or object
            return objectEquals(base[key], target[key]);
        } else {
            return base[key] === target[key];
        }
    });
};

module.exports = objectEquals;
