const messages = {
    zh: {
        headerTitle: '币全 CoinAll 数字货币交易平台',
        headerSubtitle: '安全便捷 · 优质币种',
        androidInstallTitle: '立即安装 CoinAll',
        betaTitle: '立即安装 CoinAll',
        title1: '高效的撮合系统',
        title2: '安全的钱包服务',
        title3: '稳定的资金清算系统',
        title4: '全球化客服服务',
        title5: '共享深度和流动性',
        testflightTips: '<div>为给您提供更加稳定的服务，iOS 版本已升级到 TestFlignt 测试版，使用稳定无掉签困扰。</div><div>在您点击安装应用后需按提示<b style=font-size: 13px;>先下载 TestFlignt</b>，这不会对您的设备安全产生任何影响，请安心下载。</div>',
    },
    en: {
        headerTitle: 'Safe and Quality Ethereum\nexchange Bitcoin wallet site',
        headerSubtitle: ' ',
        androidInstallTitle: 'Download CoinAll',
        betaTitle: 'Download CoinAll',
        title1: 'Efficient Order Matching System',
        title2: 'Banking-grade Wallet',
        title3: 'Leading Risk Management System',
        title4: 'Global customer support',
        title5: 'Share Liquidity With OKEx',
        testflightTips: '<div>In order to offer users more stable services, the CoinAll app (iOS version) has been upgraded to TestFlignt beta for a smoother operation. </div><div>After clicking install, <b style=font-size: 13px;>please follow the instructions to download TestFlignt</b>. Please be rest assured that this will not cause any security risks to your device.</div>',
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
            betaTitle: i18n.t('betaTitle'),
            storeTitle: false,
            logo: './images/header-logo.png',
            androidDownloadURL: 'https://ok-public-hk.oss-accelerate.aliyuncs.com/upgradeapp/CoinAll-android.apk',
            testflightTips: i18n.t('testflightTips'),
            tipsData: [{
                icon: './icon/icon-1.png',
                title: i18n.t('title1'),
            }, {
                icon: './icon/icon-2.png',
                title: i18n.t('title2'),
            }, {
                icon: './icon/icon-3.png',
                title: i18n.t('title3'),
            }, {
                icon: './icon/icon-4.png',
                title: i18n.t('title4'),
            }, {
                icon: './icon/icon-5.png',
                title: i18n.t('title5'),
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
                // 企业签名
                // window.location = "ios-beta.html"
                // 蒲公英超级签名
                // window.location = "beta/"
                window.location = "https://testflight.apple.com/join/hy1y45KA"
            }
        },
        android() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                window.location.href = this.androidDownloadURL;
                downloadEvent("coinall_android_install_click");
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