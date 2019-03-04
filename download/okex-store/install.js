document.getElementById('install').onclick = function () {
    let u = navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
        window.location.href = "https://itunes.apple.com/us/app/okex-bitcoin-cryptocurrency/id1327268470?mt=8";
    } else {
        window.location.href = "https://play.google.com/store/apps/details?id=com.okinc.okex";
    }
}