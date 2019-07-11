new Vue({
    el: '#app',
    data: function () {
        return {
            logo: '../test/images/logo-ios-store.png',
            headerTitle: 'OKEx App Store 安装',
            headerSubtitle: '如果您拥有非中国地区的Apple ID，请直接使用该ID登录App Store，下载OKEx APP即可。',
            tipsData1: [
                {
                    title: '进入 App Store 应用',
                    img: './images/ios-store-tips-1-1.png',
                },
                {
                    title: '点击 App Store 首页右上角头像',
                    img: './images/ios-store-tips-1-2.png',
                },
                {
                    title: '点击退出登录，重新输入 Apple ID 和密码',
                    img: './images/ios-store-tips-1-3.png',
                }
            ],
            tipsData2: [
                {
                    title: '登录成功后，会自动跳转至美国版的App Store点击App Store 下方搜索，然后在页面输入框搜索OKEx',
                    img: './images/ios-store-tips-2-1.png',
                },
                {
                    title: '点击“GET”按钮，开始安装App，回到桌面查看即可',
                    img: './images/ios-store-tips-2-2.png',
                }
            ],
        }
    },
    methods: {
        handleDownload() {
        },
    }
});