/**
 * URL Regex:
 * https://(www|live).bilibili.com/($|\?|#|\d+|anime|bangumi/play|video)
 * 
 * if in path anime | bangumi/play; set policy group to TARGET_PROXY
 * else set policy group to DIRECT
 */

// specify the policy group
const TARGET_POLICY_GROUP = 'Bili';
const TARGET_PROXY = 'HK';
const DIRECT = 'DIRECT';
const SWITCH_REGEX = /^https:\/\/www\.bilibili\.com\/(anime|bangumi\/play)/;
const url = 'https://www.bilibili.com/anime/play/';
// ----------



// get current state to prevent unnecessary switch
let promiseCurrentPolicy = new Promise(function (resolve, reject) {
    $httpAPI(
        'GET',
        `/v1/policy_groups/select?group_name=${encodeURI(TARGET_POLICY_GROUP)}`,
        null,
        result =>
            // response example: {"policy": "ProxyA"}
            resolve(result.policy)
    )
})

// find target policy
let apiBody = {
    'group_name': TARGET_POLICY_GROUP,
    'policy': undefined,  // default?
}
let notificationMessage;
if (SWITCH_REGEX.test(url)) {
    // set policy group to TARGET_PROXY
    apiBody['policy'] = TARGET_PROXY;
    notificationMessage = '开启B站代理';
} else {
    // set policy group to DIRECT
    apiBody['policy'] = DIRECT;
    notificationMessage = '关闭B站代理';
}



promiseCurrentPolicy.then(currentPolicy => {
    if (currentPolicy === apiBody['policy']) {
        // no need to switch
        console.log(`${url}，无需切换`);
        $done();
    } else {
        // perform switch
        $httpAPI('POST', '/v1/policy_groups/select', apiBody, (result) => {
            if (result === null)
                {
                $notification.post(notificationMessage, url, '');
                console.log(`${url}，${notificationMessage}`);
                }
            else
                {
                // on success: result === null
                // on failure: result === {"error" : "invalid parameters"}
                $notification.post(notificationMessage, url, result.error);
				console.log(`${url}，${notificationMessage}, error`);
                }
            $done();
        })
    }
})
