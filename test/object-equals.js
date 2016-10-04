/**
 * @since 2016-10-04 21:46
 * @author vivaxy
 */

const objectEquals = require('../library/object-equals');

console.log(
    objectEquals(
        JSON.parse('{"pullrequest":{"title":"test","reviewers":[],"closed_by":{"username":"vivaxy","display_name":"vivaxy","type":"user","uuid":"{4b89c55b-29b8-4f3c-bb39-1265a38404ec}","links":{"avatar":{"href":"https://bitbucket.org/account/vivaxy/avatar/32/"},"self":{"href":"https://api.bitbucket.org/2.0/users/vivaxy"},"html":{"href":"https://bitbucket.org/vivaxy/"}}},"created_on":"2016-10-04T13:55:56.495828+00:00","participants":[],"author":{"username":"vivaxy","display_name":"vivaxy","type":"user","uuid":"{4b89c55b-29b8-4f3c-bb39-1265a38404ec}","links":{"avatar":{"href":"https://bitbucket.org/account/vivaxy/avatar/32/"},"self":{"href":"https://api.bitbucket.org/2.0/users/vivaxy"},"html":{"href":"https://bitbucket.org/vivaxy/"}}},"description":"","updated_on":"2016-10-04T13:56:04.708172+00:00","comment_count":0,"destination":{"branch":{"name":"master"},"repository":{"type":"repository","name":"H&C web","full_name":"h-c/h-c-web","uuid":"{d34c7842-ed26-41e3-b939-629650182e1a}","links":{"avatar":{"href":"https://bitbucket.org/h-c/h-c-web/avatar/32/"},"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web"},"html":{"href":"https://bitbucket.org/h-c/h-c-web"}}},"commit":{"links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web/commit/4b6b5efc1c8a"}},"hash":"4b6b5efc1c8a"}},"links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web/pullrequests/93"},"html":{"href":"https://bitbucket.org/h-c/h-c-web/pull-requests/93"}},"id":93,"task_count":0,"state":"MERGED","reason":"","source":{"branch":{"name":"dev"},"repository":{"type":"repository","name":"H&C web","full_name":"h-c/h-c-web","uuid":"{d34c7842-ed26-41e3-b939-629650182e1a}","links":{"avatar":{"href":"https://bitbucket.org/h-c/h-c-web/avatar/32/"},"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web"},"html":{"href":"https://bitbucket.org/h-c/h-c-web"}}},"commit":{"links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web/commit/80b982aebdd9"}},"hash":"80b982aebdd9"}},"type":"pullrequest","merge_commit":{"links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web/commit/6d62a740a7f5"}},"hash":"6d62a740a7f5"},"close_source_branch":false},"repository":{"website":"","name":"H&C web","full_name":"h-c/h-c-web","owner":{"username":"h-c","display_name":"H&C","type":"team","uuid":"{285e222d-72b1-41bd-8f93-03f8a3929198}","links":{"avatar":{"href":"https://bitbucket.org/account/h-c/avatar/32/"},"self":{"href":"https://api.bitbucket.org/2.0/teams/h-c"},"html":{"href":"https://bitbucket.org/h-c/"}}},"scm":"git","type":"repository","project":{"name":"HcServer","type":"project","uuid":"{53e967cf-3860-4427-a374-93f01fe2cf54}","key":"HCSER","links":{"avatar":{"href":"https://bitbucket.org/account/user/h-c/projects/HCSER/avatar/32"},"self":{"href":"https://api.bitbucket.org/2.0/teams/h-c/projects/HCSER"},"html":{"href":"https://bitbucket.org/account/user/h-c/projects/HCSER"}}},"uuid":"{d34c7842-ed26-41e3-b939-629650182e1a}","is_private":true,"links":{"avatar":{"href":"https://bitbucket.org/h-c/h-c-web/avatar/32/"},"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web"},"html":{"href":"https://bitbucket.org/h-c/h-c-web"}}},"actor":{"username":"vivaxy","display_name":"vivaxy","type":"user","uuid":"{4b89c55b-29b8-4f3c-bb39-1265a38404ec}","links":{"avatar":{"href":"https://bitbucket.org/account/vivaxy/avatar/32/"},"self":{"href":"https://api.bitbucket.org/2.0/users/vivaxy"},"html":{"href":"https://bitbucket.org/vivaxy/"}}}}'),
        JSON.parse('{"pullrequest":{"updated_on":"2016-10-04T13:56:04.708172+00:00","destination":{"branch":{"name":"master"},"repository":{"full_name":"h-c/h-c-web","uuid":"{d34c7842-ed26-41e3-b939-629650182e1a}","name":"H&C web","links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web"},"avatar":{"href":"https://bitbucket.org/h-c/h-c-web/avatar/32/"},"html":{"href":"https://bitbucket.org/h-c/h-c-web"}},"type":"repository"},"commit":{"hash":"4b6b5efc1c8a","links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web/commit/4b6b5efc1c8a"}}}},"merge_commit":{"hash":"6d62a740a7f5","links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web/commit/6d62a740a7f5"}}},"links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web/pullrequests/93"},"html":{"href":"https://bitbucket.org/h-c/h-c-web/pull-requests/93"}},"state":"MERGED","author":{"display_name":"vivaxy","uuid":"{4b89c55b-29b8-4f3c-bb39-1265a38404ec}","username":"vivaxy","links":{"self":{"href":"https://api.bitbucket.org/2.0/users/vivaxy"},"avatar":{"href":"https://bitbucket.org/account/vivaxy/avatar/32/"},"html":{"href":"https://bitbucket.org/vivaxy/"}},"type":"user"},"source":{"branch":{"name":"dev"},"repository":{"full_name":"h-c/h-c-web","uuid":"{d34c7842-ed26-41e3-b939-629650182e1a}","name":"H&C web","links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web"},"avatar":{"href":"https://bitbucket.org/h-c/h-c-web/avatar/32/"},"html":{"href":"https://bitbucket.org/h-c/h-c-web"}},"type":"repository"},"commit":{"hash":"80b982aebdd9","links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web/commit/80b982aebdd9"}}}},"created_on":"2016-10-04T13:55:56.495828+00:00","id":93,"description":"","reviewers":[],"closed_by":{"display_name":"vivaxy","uuid":"{4b89c55b-29b8-4f3c-bb39-1265a38404ec}","username":"vivaxy","links":{"self":{"href":"https://api.bitbucket.org/2.0/users/vivaxy"},"avatar":{"href":"https://bitbucket.org/account/vivaxy/avatar/32/"},"html":{"href":"https://bitbucket.org/vivaxy/"}},"type":"user"},"comment_count":0,"title":"test","reason":"","type":"pullrequest","close_source_branch":false,"participants":[],"task_count":0},"repository":{"project":{"uuid":"{53e967cf-3860-4427-a374-93f01fe2cf54}","name":"HcServer","links":{"self":{"href":"https://api.bitbucket.org/2.0/teams/h-c/projects/HCSER"},"avatar":{"href":"https://bitbucket.org/account/user/h-c/projects/HCSER/avatar/32"},"html":{"href":"https://bitbucket.org/account/user/h-c/projects/HCSER"}},"key":"HCSER","type":"project"},"full_name":"h-c/h-c-web","uuid":"{d34c7842-ed26-41e3-b939-629650182e1a}","website":"","is_private":true,"links":{"self":{"href":"https://api.bitbucket.org/2.0/repositories/h-c/h-c-web"},"avatar":{"href":"https://bitbucket.org/h-c/h-c-web/avatar/32/"},"html":{"href":"https://bitbucket.org/h-c/h-c-web"}},"scm":"git","name":"H&C web","owner":{"display_name":"H&C","uuid":"{285e222d-72b1-41bd-8f93-03f8a3929198}","username":"h-c","links":{"self":{"href":"https://api.bitbucket.org/2.0/teams/h-c"},"avatar":{"href":"https://bitbucket.org/account/h-c/avatar/32/"},"html":{"href":"https://bitbucket.org/h-c/"}},"type":"team"},"type":"repository"},"actor":{"display_name":"vivaxy","uuid":"{4b89c55b-29b8-4f3c-bb39-1265a38404ec}","username":"vivaxy","links":{"self":{"href":"https://api.bitbucket.org/2.0/users/vivaxy"},"avatar":{"href":"https://bitbucket.org/account/vivaxy/avatar/32/"},"html":{"href":"https://bitbucket.org/vivaxy/"}},"type":"user"}}')
    )
);
