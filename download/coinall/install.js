document.getElementById('install').onclick = function () {
    let u = navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
        window.location.href = "itms-services://?action=download-manifest&url=https://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/install-coinall-manifest.plist";
        _czc.push(["_trackEvent", "下载", "coinall_ios_install_click"]);
    } else {
        window.location.href = "http://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/CoinAll-android.apk";
        _czc.push(["_trackEvent", "下载", "coinall_android_install_click"]);
    }
}