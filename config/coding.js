/**
 * @since 2016-09-08 14:27
 * @author vivaxy
 */

module.exports = {
    path: '/hooks/deploy',
    method: 'POST',
    headers: {
        'user-agent': 'Coding.net Hook',
        'x-coding-event': 'merge_request',
    },
    body: {
        merge_request: {
            target_branch: 'master',
            status: 'MERGED',
        },
        event: 'merge_request',
    },
};
