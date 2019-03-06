/**
 * 按钮点击事件
 */
$(document).ready(function () {
    $(".button").click(function () {
        onDownloadButtonClick();
    });

    $(".btn").click(function () {
        onDownloadButtonClick();
    });
});

/**
 * 下载按钮点击
 */
function onDownloadButtonClick() {
    var isWx = isWeChat();
    if (isWx) {
        $(".wx-tip").show();
    } else {
        downloadAction();
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
    //设备判断
    let u = navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    //渠道ID
    var channelID = getQueryResult("channelID");
    channelID = channelID.length > 0 ? channelID : "";
    //区分站点
    var location = window.location.toString();
    if (location.indexOf("okex-store") != -1) {
        okexStoreDownload(isiOS, channelID);
    } else if (location.indexOf("okex-channel") != -1) {
        okexBetaDownload(isiOS, channelID);
    }
}

/**
 * 商店版下载
 */
function okexStoreDownload(isiOS, channelID) {
    var url = null;
    if (isiOS) {
        _czc.push(["_trackEvent", "下载", "okex_store_ios_install_click", channelID]);
        url = "https://itunes.apple.com/us/app/okex-bitcoin-cryptocurrency/id1327268470?mt=8";
        window.location.href = url;
    } else {
        _czc.push(["_trackEvent", "下载", "okex_store_android_install_click", channelID]);
        url = "https://play.google.com/store/apps/details?id=com.okinc.okex";
        window.location.href = url;
    }
    //Google Analytics
    gtag_report_conversion(url);
}

/**
 * 内测版下载
 */
function okexBetaDownload(isiOS, channelID) {
    var url = null;
    if (isiOS) {
        _czc.push(["_trackEvent", "下载", "okex_ios_install_click", channelID]);
        url = "itms-services://?action=download-manifest&url=https://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/install-manifest.plist";
        window.location.href = url;
    } else {
        _czc.push(["_trackEvent", "下载", "okex_android_install_click", channelID]);
        url = "http://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/OKEx-android.apk";
        window.location.href = url;
    }
    //Google Analytics
    gtag_report_conversion(url);
}

/**
 * Event snippet for 下载 conversion page In your html page, 
 * add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
 */
function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', { 'send_to': 'AW-760667109/EVYKCICdm5YBEOW32-oC', 'event_callback': callback });
    return false;
}