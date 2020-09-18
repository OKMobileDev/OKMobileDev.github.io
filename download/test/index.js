const messages = {
    // 'lang': path.i18n,
    zh: {
        headerTitle: '全球领先的数字资产交易平台',
        headerSubtitle: '安全 · 稳定 · 可信',
        androidInstallTitle: '安装 Android 版',
        betaTitle: '安装内测版',
        title1: '更安全',
        subtitle1:'老牌交易所',
        title2: '更多糖果',
        subtitle2:'多元化奖励机制',
        title3: '更多样',
        subtitle3:'支持合约等多种交易类型',
    },
    en: {
        headerTitle: '111',
        headerSubtitle: '222',
        androidInstallTitle: '333',
        betaTitle: '444',
        title1: '555',
        subtitle1:'666',
        title2: '777',
        subtitle2:'888',
        title3: '999',
        subtitle3:'000',
    }
}

const i18n = new VueI18n({
    locale: ((navigator.language)?navigator.language:navigator.userLanguage).substr(0, 2), // 设置语言
    // locale: 'en',
    fallbackLocale: 'en',// 获取不到语言的话默认的语言
    messages // 语言包
})

new Vue({
    el: '#app',
    data: function () {
        return {
            headerName: 'OKEX',
            headerTitle: i18n.t('headerTitle'),
            headerSubtitle: i18n.t('headerSubtitle'),
            androidInstallTitle: i18n.t('androidInstallTitle'),
            betaTitle: i18n.t('betaTitle'),
            storeTitle: 'App Store',
            logo: './images/logo.png',
            androidDownloadURL: 'https://ok-public-hk.oss-accelerate.aliyuncs.com/upgradeapp/OKEx-android.apk',
            tipsData: [{
                icon: './icon/icon-security.png',
                title: i18n.t('title1'),
                subtitle: i18n.t('subtitle1'),
            }, {
                icon: './icon/icon-candy.png',
                title: i18n.t('title2'),
                subtitle: i18n.t('subtitle2'),
            }, {
                icon: './icon/icon-various.png',
                title: i18n.t('title3'),
                subtitle: i18n.t('subtitle3'),
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