const baseURL = "https://www.v2ex.com/api"
const latestTopics = baseURL + "/topics/latest.json"
const hotTopics = baseURL + "/topics/hot.json"
const userinfo = baseURL + "/members/show.json"
const nodeinfo = baseURL + "/nodes/show.json"
const nodeAll = baseURL + "/nodes/all.json"
const topic = baseURL + "/topics/show.json"
const topicReplies = baseURL + "/replies/show.json"
const siteinfo = baseURL + "/site/info.json"
const stateinfo = baseURL + "/site/stats.json"

function _obj2uri(obj){
	return Object.keys(obj).map(function(k) {
		return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
	}).join('&');
}


function _getTopicInfo(o) {
	return topic+'?'+_obj2uri(o);
} 


module.exports = {
    baseURL,
    latestTopics,
    hotTopics,
    userinfo,
    nodeinfo,
    topic,
    topicReplies,
    siteinfo,
    stateinfo,
    nodeAll,
    getTopicInfo:_getTopicInfo

}
