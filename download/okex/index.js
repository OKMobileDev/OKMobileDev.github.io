const messages = {
    zh: {
        headerTitle: '全球领先的数字资产交易平台',
        headerSubtitle: '安全 · 稳定 · 可信',
        androidInstallTitle: '安装 Android 版',
        betaTitle: '内测版',
        icon1: './icon/icon-security.png',
        title1: '更安全',
        subtitle1: '老牌交易所',
        icon2: './icon/icon-candy.png',
        title2: '更多糖果',
        subtitle2: '多元化奖励机制',
        icon3: './icon/icon-various.png',
        title3: '更多样',
        subtitle3: '支持合约等多种交易类型',
        tftitle: 'TestFlight 版',
    },
    en: {
        headerTitle: 'The Most Trusted Digital \n Asset Exchange',
        headerSubtitle: 'Global Leader of Blockchain Technology',
        androidInstallTitle: 'Download for Android',
        betaTitle: 'Beta APP',
        icon1: './icon/icon_en_1.png',
        title1: 'Spot / Margin Trading',
        subtitle1: 'Trade over a hundred types of tokens including Bitcoin',
        icon2: './icon/icon_en_2.png',
        title2: 'Futures Contract',
        subtitle2: 'Arbitrage and hedge your risks with the convenient leverage option',
        icon3: './icon/icon_en_3.png',
        title3: 'Perpetual Swap',
        subtitle3: 'Never-expiring contract with up to 100x leverage and an advanced risk management system',
        tftitle: 'TestFlight',
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
            headerName: 'OKX',
            headerTitle: i18n.t('headerTitle'),
            headerSubtitle: i18n.t('headerSubtitle'),
            androidInstallTitle: i18n.t('androidInstallTitle'),
            // betaTitle: i18n.t('betaTitle'),
            betaTitle: betaTitle(),
            storeTitle: 'App Store',
            tftitle: i18n.t('tftitle'),
            logo: './images/logo.png',
            androidDownloadURL: '',
            tipsData: [{
                icon: i18n.t('icon1'),
                title: i18n.t('title1'),
                subtitle: i18n.t('subtitle1'),
            }, {
                icon: i18n.t('icon2'),
                title: i18n.t('title2'),
                subtitle: i18n.t('subtitle2'),
            }, {
                icon: i18n.t('icon3'),
                title: i18n.t('title3'),
                subtitle: i18n.t('subtitle3'),
            }]
        }
    },
    mounted: function () {
        var query = window.location.search.substring(1).toLocaleLowerCase();
        if (query.indexOf('from=ma') != -1) {
            this.androidDownloadURL = 'https://static.coinall.ltd/cdn/oksupport/apk/OKEx-android_ma.apk'
        }else if(query.indexOf('from=lenovo') != -1) {
            this.androidDownloadURL = 'https://hkpublic.oss-accelerate.aliyuncs.com/upgradeapp/OKEx-android-lenovo.apk'
        } else {
            this.androidDownloadURL = 'https://okg-pub-hk.oss-accelerate.aliyuncs.com/upgradeapp/OKX-android.apk'
        }

        // 引导至官网
        // let locale = ((navigator.language) ? navigator.language : navigator.userLanguage).substr(0, 2)
        // if (locale == 'zh') {
        //     window.location = "https://okex.me/download"
        // }else {
        //     window.location = "https://okex.com/download"
        // }
    },
    methods: {
        ios_appstore() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                if (i18n.locale == 'en') {
                    const storeURL = 'https://apps.apple.com/us/app/okex-bitcoin-cryptocurrency/id1327268470'
                    window.location = storeURL
                } else {
                    window.location = "ios-store.html"
                }
            }
        },
        ios_beta() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            } else {
                var isSafari = /Safari/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent) && !/Baidu/.test(navigator.userAgent)
                if (isSafari) {
                    window.location = "https://www.ouyi.art/download?channelId=ACECO4505000"
                    // window.location = "ios-beta.html"
                    // 蒲公英超级签名
                    // window.location = "beta/"
                    // 柠檬超级签名
                    // window.location = "https://www.ningmeng.store/install/2021749484.html"
                } else {
                    let alert = new AlertClass();
                    alert.show({
                        title: '温馨提示',
                        content: '您所使用的浏览器无法下载内测版 APP，请拷贝链接并使用 Safari 浏览器打开 \n https://okmobiledev.github.io/download/okex/',
                        onHide: function () {
                            
                        }
                    })
                }
            }
        },
        ios_testflight() {
            if (isWeChat() == true) {
                $(".wx-tip").show();
            }else {
                // window.location = "https://testflight.apple.com/join/m7PeBGDv"
                // window.location = "https://testflight.apple.com/join/IcF2evM8"
                window.location = "https://testflight.apple.com/join/LSjW79mu"
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
 * 根据语言获取内测文案，返回空时不显示内测
 */
function betaTitle() {
    if (i18n.locale == 'en') {
        return ''
    } else {
        return i18n.t('betaTitle')
    }
}

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
