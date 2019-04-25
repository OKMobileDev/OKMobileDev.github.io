/**
 * 按钮点击事件
 */
$(document).ready(function () {
    $(".btn").click(function () {
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
function isWeChat() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
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
    //渠道ID
    var channelID = getQueryResult("channelID");
    channelID = channelID.length > 0 ? channelID : "";
    if (isiOS) {
        if (-1 < window.location.toString().indexOf("ios.html")) {
            var isForeign = getQueryResult("isForeign");
            if (isForeign == true) {
                okcoinStoreDownload(isiOS, channelID);
            } else {
                okcoinBetaDownload(isiOS, channelID);
            }
        } else {
            //获取参数
            var query = window.location.search;
            //重定向到 iOS 页面
            window.location = 'ios.html' + query;
        }
    } else {
        okcoinBetaDownload(isiOS, channelID);
    }
}

/**
 * OKCoin 内测版下载
 */
function okcoinBetaDownload(isiOS, channelID) {
    if (isiOS) {
        window.location.href = "itms-services://?action=download-manifest&url=https://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/install-okcoin-manifest.plist";
        _czc.push(["_trackEvent", "下载", "okcoin_ios_install_click", channelID]);
    } else {
        window.location.href = "http://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/OKCoin-android.apk";
        _czc.push(["_trackEvent", "下载", "okcoin_android_install_click", channelID]);
    }
}

/**
 * OKCoin 商店版下载
 */
function okcoinStoreDownload(isiOS, channelID) {
    if (isiOS) {
        window.location.href = "https://itunes.apple.com/us/app/okcoin-bitcoin-trading-exch/id867444712?mt=8";
        _czc.push(["_trackEvent", "下载", "okcoin_store_ios_install_click", channelID]);
    } else {
        window.location.href = "https://play.google.com/store/apps/details?id=com.okinc.okcoin.intl";
        _czc.push(["_trackEvent", "下载", "okcoin_store_android_install_click", channelID]);
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