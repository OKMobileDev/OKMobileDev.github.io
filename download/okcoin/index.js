new Vue({
    el: '#app',
    data: function () {
        return {
            headerName: ' ',
            headerTitle: '专业的数字资产交易平台',
            headerSubtitle: '您将在最安全可靠的平台之一上交易您的数字资产。',
            androidInstallTitle: '安装 Android 版',
            betaTitle: false,
            storeTitle: '去 App Store 安装',
            logo: './images/header-logo.png',
            androidDownloadURL: 'http://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/OKCoin-android.apk',
            tipsData: [{
                icon: './icon/icon-1.png',
                title: '交易手续费不高于0.1 %',
            }, {
                icon: './icon/icon-2.png',
                title: '杠杆利息低至0.001 %',
            }, {
                icon: './icon/icon-3.png',
                title: '美元充值0手续费',
            }]
        }
    },
    methods: {
        ios_appstore() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location = "ios-store.html"
            }
        },
        ios_beta() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location = "ios-beta.html"
            }
        },
        android() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location.href = this.androidDownloadURL;
                downloadEvent("okcoin_android_install_click");
            }
        }
    }
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