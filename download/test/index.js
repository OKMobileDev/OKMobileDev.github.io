new Vue({
    el: '#app',
    data: function () {
        return {
            headerName: 'OKEX',
            headerTitle: '全球领先的数字资产交易平台',
            headerSubtitle: '安全 · 稳定 · 可信',
            androidInstallTitle: '安装 Android 版',
            logo: './images/logo.png',
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
            }, {
                icon: './icon/icon-science.png',
                title: '更科学',
                subtitle: '支持ETT组合交易，告别行情过山车',
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
                window.location.href = "http://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/OKEx-android.apk";
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