/**
 * @since 2016-09-08 14:34
 * @author vivaxy
 */

const validObject = (config, target) => {
    if (target === undefined) {
        return false;
    }
    return Object.keys(config).every((key) => {
        if (typeof config[key] === 'object') {
            return validObject(config[key], target[key]);
        } else {
            return config[key] === target[key];
        }
    });
};

module.exports = (config, request) => {
    return validObject(config, request);
};
