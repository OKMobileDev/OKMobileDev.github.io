document.getElementById('install').onclick = function () {
    let u = navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
        _czc.push(["_trackEvent", "下载", "okex_vn_ios_install_click"]);
        window.location.href = "https://itunes.apple.com/app/id1327268470";
    } else {
        _czc.push(["_trackEvent", "下载", "okex_vn_android_install_click"]);
        window.location.href = "https://play.google.com/store/apps/details?id=com.okinc.okex";
    }
}