const messages = {
    en: {
        headerTitle: `The World's Leading One-Stop \n Crypto Exchange`,
        headerSubtitle: 'Safe Stable Reliable',
        androidInstallTitle: 'Download for Android',
        betaTitle: 'iOS Beta Version',
        icon1: './icon/icon_en_1.png',
        title1: 'Safer',
        subtitle1: 'Established Exchange',
        icon2: './icon/icon_en_2.png',
        title2: 'More Airdrops',
        subtitle2: 'Diversed Rewards System',
        icon3: './icon/icon_en_3.png',
        title3: 'More Diversities',
        subtitle3: 'Support Multiple Trading Options Including Derivatives',
        tftitle: 'TestFlight',
        i18nSupport: 'true',

        installTitle: 'Stable, safe, convenient and fast for the upgrade',
        installSubtitle: 'Unfortunately, we currently do not support the latest version for the Indian App Store',
        installBetaTitle: 'Simple and fast to install',
        installBetaSubtitle: 'Upgrade needs to be installed again',
    }
}

const i18n = new VueI18n({
    locale: 'en',
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
            // betaTitle: i18n.t('betaTitle'),
            betaTitle: betaTitle(),
            storeTitle: 'App Store',
            tftitle: i18n.t('tftitle'),
            logo: './images/logo.png',
            androidDownloadURL: '',
            i18nSupport: i18n.t('i18nSupport'),
            installTitle: i18n.t('installTitle'),
            installSubtitle: i18n.t('installSubtitle'),
            installBetaTitle: i18n.t('installBetaTitle'),
            installBetaSubtitle: i18n.t('installBetaSubtitle'),
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
        if (query.indexOf('from=lenovo') != -1) {
            this.androidDownloadURL = 'https://hkpublic.oss-accelerate.aliyuncs.com/upgradeapp/OKEx-android-lenovo.apk'
        } else {
            this.androidDownloadURL = 'https://ok-public-hk.oss-accelerate.aliyuncs.com/upgradeapp/OKEx-android.apk'
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
                    // 企业签名
                    window.location = "ios-beta.html"
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
    // if (i18n.locale == 'en') {
    //     return ''
    // } else {
    //     return i18n.t('betaTitle')
    // }
    return i18n.t('betaTitle')
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