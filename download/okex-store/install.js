/**
 * 按钮点击事件
 */
$(document).ready(function(){
    $(".button").click(function(){
        var isWx = isWeChat();
        if (isWx) {
            $(".wx-tip").show();
        } else {
            downloadAction();
        }
    });
});

/**
 * 根据 key 查询参数值
 * @param {String} key
 */
function getQueryResult(key) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == key){return pair[1];}
       }
       return(false);
}

/**
 * 判断是否是微信
 */
function isWeChat(){
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		return true;
    }
    if (ua.match(/MicroMessenger/i) == 'wxwork') {
        return true;
    }
	return false;
};

/**
 * 下载事件
 */
function downloadAction() {
    let u = navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    //渠道ID
    var channelID = getQueryResult("channelID");
    channelID = channelID.length > 0 ? channelID : "";

    //跳转下载
    if (isiOS) {
        _czc.push(["_trackEvent", "下载", "okex_store_ios_install_click", channelID]);
        window.location.href = "https://itunes.apple.com/us/app/okex-bitcoin-cryptocurrency/id1327268470?mt=8";
    } else {
        _czc.push(["_trackEvent", "下载", "okex_store_android_install_click", channelID]);
        window.location.href = "https://play.google.com/store/apps/details?id=com.okinc.okex";
    }
}