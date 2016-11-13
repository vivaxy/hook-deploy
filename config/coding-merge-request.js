/**
 * @since 2016-09-08 14:27
 * @author vivaxy
 */

module.exports = {
    method: 'POST',
    headers: {
        'user-agent': 'Coding.net Hook',
        'x-coding-event': 'merge_request',
    },
    body: {
        merge_request: {
            target_branch: 'master',
            status: 'ACCEPTED',
        },
        event: 'merge_request',
    },
};
