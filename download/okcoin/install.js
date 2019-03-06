/**
 * 按钮点击事件
 */
$(document).ready(function(){
    $(".btn").click(function(){
        var isWx = isWeChat();
        if (isWx) {
            $(".wx-tip").show();   
        } else {
            downloadAction();
        }
    });
});

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
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
        if (-1 < window.location.toString().indexOf("ios.html")) {
            window.location.href = "itms-services://?action=download-manifest&url=https://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/install-okcoin-manifest.plist";
            _czc.push(["_trackEvent", "下载", "okcoin_ios_install_click"]);
        } else {
            window.location = 'ios.html';
        }
    } else {
        window.location.href = "http://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/OKCoin-android.apk";
        _czc.push(["_trackEvent", "下载", "okcoin_android_install_click"]);
    }   
}