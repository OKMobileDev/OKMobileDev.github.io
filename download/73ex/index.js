new Vue({
    el: '#app',
    data: function () {
        return {
            headerName: '73Street',
            headerTitle: '73Street 老韭菜囤币首选平台',
            headerSubtitle: '币圈淘宝，币种丰富，请投资您熟悉的币种',
            androidInstallTitle: '立即安装 73Street',
            betaTitle: '立即安装 73Street',
            storeTitle: false,
            logo: './images/header-logo.png',
            androidDownloadURL: 'https://ok-public-hk.oss-accelerate.aliyuncs.com/upgradeapp/73ex-android.apk',
            testflightTips: '<div>为给您提供更加稳定的服务，iOS 版本已升级到 TestFlignt 测试版，使用稳定无掉签困扰。</div><div>在您点击安装应用后需按提示<b style=font-size: 13px;>先下载 TestFlignt</b>，这不会对您的设备安全产生任何影响，请安心下载。</div>',
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
                window.location = "https://testflight.apple.com/join/h9cCBs4E";
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