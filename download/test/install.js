$(".button").click(function () {
    -1 < navigator.userAgent.indexOf("iPhone") || -1 < navigator.userAgent.indexOf("iOS") ? window.location.href = "itms-services://?action=download-manifest&url=https://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/install-manifest.plist" : window.location.href = "http://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/OKEx-android.apk"
});