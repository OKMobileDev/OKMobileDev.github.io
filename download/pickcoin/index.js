new Vue({
    el: '#app',
    data: function () {
        return {
            headerName: ' ',
            headerTitle: 'PICK US，让财富增值!',
            headerSubtitle: '',
            androidInstallTitle: '立即安装 PICKCOIN',
            betaTitle: '立即安装 PICKCOIN',
            storeTitle: false,
            logo: './images/header-logo.png',
            androidDownloadURL: 'https://ok-public-hk.oss-accelerate.aliyuncs.com/upgradeapp/PickCoin-android.apk',
            tipsData: [{
                icon: './icon/icon-1.png',
                title: '高效的撮合系统',
            }, {
                icon: './icon/icon-2.png',
                title: '安全的钱包服务',
            }, {
                icon: './icon/icon-3.png',
                title: '稳定的资金清算系统',
            }, {
                icon: './icon/icon-4.png',
                title: '全球化客服服务',
            }, {
                icon: './icon/icon-5.png',
                title: '共享深度和流动性',
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
                // window.location = "ios-beta.html"
                window.location = "https://testflight.apple.com/join/Vjo5mxpw"
            }
        },
        android() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location.href = this.androidDownloadURL;
                downloadEvent("pickcoin_android_install_click");
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