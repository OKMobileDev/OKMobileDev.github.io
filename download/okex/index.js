new Vue({
    el: '#app',
    data: function () {
        return {
            headerName: 'OKEX',
            headerTitle: '全球领先的数字资产交易平台',
            headerSubtitle: '安全 · 稳定 · 可信',
            androidInstallTitle: '安装 Android 版',
            betaTitle: '安装内测版',
            storeTitle: 'App Store',
            logo: './images/logo.png',
            androidDownloadURL: 'https://ok-public-hz.oss-cn-hangzhou.aliyuncs.com/upgradeapp/OKEx-android.apk',
            tipsData: [{
                icon: './icon/icon-security.png',
                title: '更安全',
                subtitle: '老牌交易所',
            }, {
                icon: './icon/icon-candy.png',
                title: '更多糖果',
                subtitle: '多元化奖励机制',
            }, {
                icon: './icon/icon-various.png',
                title: '更多样',
                subtitle: '支持合约等多种交易类型',
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
                // 跳转到超级签名地址
                window.location = "https://www.ningmeng.store/install/2021749484.html"
            }
        },
        android() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location.href = this.androidDownloadURL;
                downloadEvent("okex_android_install_click");
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