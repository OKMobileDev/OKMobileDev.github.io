document.getElementById('install').onclick = function () {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
        if (-1 < window.location.toString().indexOf("ios.html")) {
            window.location.href = "itms-services://?action=download-manifest&url=https://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/install-manifest.plist"
        } else {
            window.location = 'ios.html'
        }
    } else {
        window.location.href = "http://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/OKEx-android.apk";
    }
}