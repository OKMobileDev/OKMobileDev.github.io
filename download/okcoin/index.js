const messages = {
    zh: {
        headerTitle: '值得信赖的加密货币交易',
        headerSubtitle: '转美元、欧元 或加密货币并立即交易',
        androidInstallTitle: '安装 Android 版',
        storeTitle: '去 App Store 安装',
        betaTitle: '安装内测版',
        title1: '用户资金离线冷存储通过 24/7 交易监控，两步身份认证和 SSL 加密',
        title2: '在美国各州（美国金融犯罪执法网络）和欧盟（马耳他金融服务管理局）良好的监管框架',
        title3: '支持20 多对法定货币交易，极速免费的提现选择，支援移动端和桌面',
    },
    en: {
        headerTitle: 'Leading Global Crypto\nExchange',
        headerSubtitle: 'Transfer USD ERU or Crypto and start trading today!',
        androidInstallTitle: 'Download for Android',
        storeTitle: 'Download on App Store',
        betaTitle: 'Beta APP',
        title1: 'Your tokens are safely stored offline with 24/7 transaction monitoring, 2FA, and SSL encryption.',
        title2: 'To ensure the safety of your assets, OKCoin complies with the local and federal regulations in the US and EU.',
        title3: 'Access your account anywhere. Use your phone or the web to make fast and free deposits.',
    }
}

const i18n = new VueI18n({
    locale: ((navigator.language) ? navigator.language : navigator.userLanguage).substr(0, 2), // 设置语言
    // locale: 'en',
    fallbackLocale: 'en',// 获取不到语言的话默认的语言
    messages // 语言包
})

new Vue({
    el: '#app',
    data: function () {
        return {
            headerName: ' ',
            headerTitle: i18n.t('headerTitle'),
            headerSubtitle: i18n.t('headerSubtitle'),
            androidInstallTitle: i18n.t('androidInstallTitle'),
            betaTitle: false,
            storeTitle: i18n.t('storeTitle'),
            logo: './images/header-logo.png',
            androidDownloadURL: 'https://ok-public-hk.oss-accelerate.aliyuncs.com/upgradeapp/OKCoin-android.apk',
            tipsData: [{
                icon: './icon/icon-1.png',
                title: i18n.t('title1'),
            }, {
                icon: './icon/icon-2.png',
                title: i18n.t('title2'),
            }, {
                icon: './icon/icon-3.png',
                title: i18n.t('title3'),
            }]
        }
    },
    methods: {
        ios_appstore() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                if (i18n.locale == 'en') {
                    const storeURL = 'https://itunes.apple.com/us/app/okcoin-bitcoin-trading-exch/id867444712?mt=8'
                    window.location = storeURL
                }else {
                    window.location = "ios-store.html"
                }
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