new Vue({
    el: '#app',
    data: function () {
        return {
            logo: './images/logo-ios-store.png',
            headerTitle: 'OKCoin App Store 安装',
            headerSubtitle: '如果您拥有非中国地区的 Apple ID，请直接使用该 ID 登录 App Store，下载 OKCoin APP 即可。',
            footerTitle: '我已知晓 去 App store 安装',
            downloadURL: 'https://itunes.apple.com/us/app/okcoin-bitcoin-trading-exch/id867444712?mt=8',
            tableAllData: [
                {
                    img: '../v2/images/ios-store-step-1.png',
                    data: [
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
                        },
                        {
                            title: '输入非中国大陆苹果账号',
                            formData: {
                                tips1: '以下美国 ID 供参考使用，请记录好您所使用的账号及密码，以便更新时使用',
                                tips2: '为防止您的手机信息泄露，请务必不要使用上方 Apple ID 登录 iCloud。使用以上 Apple ID 下载过后，请您及时退出该账号',
                                tableData: [
                                    {
                                        account: '账号',
                                        password: '密码'
                                    },
                                    {
                                        account: 'OKEX_bj@163.com',
                                        password: 'Ok123456'
                                    },
                                    {
                                        account: 'OKEX_bj@163.com',
                                        password: 'Ok123456'
                                    },
                                    {
                                        account: 'OKEX_bj@163.com',
                                        password: 'Ok123456'
                                    },
                                ]
                            }
                        }
                    ]
                },
                {
                    img: '../v2/images/ios-store-step-2.png',
                    data: [
                        {
                            title: '登录成功后，会自动跳转至美国版的 App Store 点击 App Store 下方搜索，然后在页面输入框搜索 OKCoin',
                            img: './images/ios-store-tips-2-1.png',
                        },
                        {
                            title: '点击“GET”按钮，开始安装 App，回到桌面查看即可',
                            img: './images/ios-store-tips-2-2.png',
                        }
                    ]
                }
            ],
        }
    },
    methods: {
        handleDownload() {
            window.location.href = this.downloadURL;
            downloadEvent("okcoin_store_ios_install_click");
        },
        rowStyle({ row, rowIndex }) {
            if (rowIndex == 0) {
                return 'background-color: rgba(48,117,238,0.05); color: #999; font-size: 12px; height: 30px;'
            } else {
                return 'background-color: rgba(48,117,238,0.05); font-size: 12px; height: 30px;'
            }
        },
        cellStyle() {
            return 'padding: 0';
        }
    }
});