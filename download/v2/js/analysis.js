var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://"); document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1276378390'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s23.cnzz.com/z_stat.php%3Fid%3D1276378390' type='text/javascript'%3E%3C/script%3E"));

/**
 * 
 * @param {上报参数} params
 */
function sendEvent(params) {
    _czc.push(params);
}

/**
 * 下载按钮点击事件
 * 
 * @param {String} event
 */
function downloadEvent(event) {
    var channelID = getQueryResult("channelID");
    channelID = channelID.length > 0 ? channelID : "";
    sendEvent(["_trackEvent", "下载", event, channelID]);
}

/**
 * 根据 key 查询参数值
 * @param {String} key
 */
function getQueryResult(key) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == key) { return pair[1]; }
    }
    return (false);
}