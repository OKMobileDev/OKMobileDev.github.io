new Vue({
    el: '#app',
    data: function () {
        return {
            headerName: 'OKEX',
            headerTitle: '全球领先的数字资产交易平台',
            headerSubtitle: '安全 · 稳定 · 可信',
            logo: '../test/images/logo.png',
            tipsData: [{
                icon: '../v2/icon/icon_security.png',
                title: '更安全',
                subtitle: '老牌交易所',
            }, {
                icon: '../v2/icon/icon_candy.png',
                title: '更多糖果',
                subtitle: '多元化奖励机制',
            }, {
                icon: '../v2/icon/icon_various.png',
                title: '更多样',
                subtitle: '支持合约等多种交易类型',
            }, {
                icon: '../v2/icon/icon_science.png',
                title: '更科学',
                subtitle: '支持ETT组合交易，告别行情过山车',
            }]
        }
    },
    methods: {
        ios_appstore() {
            alert('appstore')
        },
        ios_beta() {
            alert('beta')
        },
        android() {
            alert('android')
        }
    }
});