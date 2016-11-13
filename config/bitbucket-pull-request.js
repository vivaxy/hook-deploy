/**
 * @since 2016-09-08 14:27
 * @author vivaxy
 */

module.exports = {
    method: 'POST',
    headers: {
        'user-agent': 'Bitbucket-Webhooks/2.0',
        'x-event-key': 'pullrequest:fulfilled'
    },
    body: {
        pullrequest: {
            state: 'MERGED',
            destination: {
                branch: {
                    name: 'master'
                }
            }
        }
    }
};
