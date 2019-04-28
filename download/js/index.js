window.onload = function () {
    let u = navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    //获取参数
    var query = window.location.search;

    //跳转目标页面
    if (isiOS) {
        var isForeign = getQueryResult("isForeign");
        var location = window.location.toString();
        var isOKEx = location.indexOf('/okex/') !== -1;
        if (isForeign == true && isOKEx == true) {
            window.location = 'ios-store.html' + query
        }else {
            window.location = 'ios.html' + query
        }
    } else {
        window.location = 'android.html' + query
    }
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