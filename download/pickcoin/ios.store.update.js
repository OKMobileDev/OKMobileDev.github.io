new Vue({
    el: '#app',
    data: function () {
        return {
            logo: '../test/images/logo-ios-store-update.png',
            headerTitle: '如使用我们提供的 Apple ID 在更新时 遇到问题…',
            footerTitle: '我已知晓 去 App Store 更新',
            formTitle: '输入非中国大陆苹果账号',
            headerSubtitle: '如果您拥有非中国地区的 Apple ID，请直接使用该 ID 登录 App Store，下载 OKCoin APP 即可。',
            downloadURL: 'https://itunes.apple.com/us/app/okcoin-bitcoin-trading-exch/id867444712?mt=8',
            tableAllData: [
                {
                    index: '01',
                    title: '如果您升级时 Apple Store 提示您：目前，此 App 在您做主的国家或地区尚未提供。',
                    data: [
                        {
                            img: './images/ios-store-update-tips-1-1.png'
                        },
                        {
                            title: '点击 App store 下方的更新，然后找到 OKCoin 更新提示',
                            img: './images/ios-store-update-tips-1-2.png'
                        },
                        {
                            title: '点击“更新”按钮示',
                            img: './images/ios-store-update-tips-1-3.png'
                        },
                        {
                            title: '在弹出框内输入密码 我们提供的公共账号密码统一为：',
                            password: 'Dd112211',
                            img: './images/ios-store-update-tips-1-4.png'
                        }
                    ]
                },
                {
                    index: '02',
                    title: '忘记公共Apple ID账号的密码',
                    data: [
                        {
                            title: '我们提供的公共账号密码统一为：',
                            password: 'Dd112211',
                            tips1: '为防止您的手机信息泄露，请务必不要使用公共 Apple ID 登录 iCloud。使用参考 Apple ID 下载过后，请您及时退出该账号。'
                        }
                    ]
                },
                {
                    index: '03',
                    title: '公共 Apple ID 被禁用或提示密码错误',
                    data: [
                        {
                            title: '卸载原有 OKCoin',
                            tips1: '按 home 键回到桌面，长按“OKCoin”图标，出现删除提示后，点击“X”删除',
                            img: './images/ios-store-update-tips-3-1.png'
                        },
                        {
                            mainTitle: '切换苹果 ID',
                            title: '进入 App Store 应用',
                            img: './images/ios-store-tips-1-1.png'
                        },
                        {
                            title: '点击 App Store 首页右上角头像',
                            img: './images/ios-store-tips-1-2.png'
                        },
                        {
                            title: '点击退出登录，重新输入 Apple ID 和密码',
                            img: './images/ios-store-tips-1-3.png'
                        },
                        {
                            title: '输入非中国大陆苹果账号',
                            tips1: '以下香港 ID 供参考使用，请记录好您所使用的账号及密码，以便更新时使用',
                            tips2: '为防止您的手机信息泄露，请务必不要使用上方 Apple ID 登录 iCloud。使用以上 Apple ID 下载过后，请您及时退出该账号',
                            tableData: getAppStoreAccountData()
                        },
                        {
                            mainTitle: '安装 APP',
                            title: '登录成功后，会自动跳转至香港版的 App Store 点击 App Store 下方搜索，然后在页面输入框搜索 OKCoin',
                            img: './images/ios-store-tips-2-1.png'
                        },
                        {
                            title: '点击“GET”按钮，开始安装 App，回到桌面查看即可',
                            img: './images/ios-store-tips-2-2.png'
                        },
                    ]
                },
            ],            
        }
    },
    methods: {
        handleDownload() {
            window.location.href = this.downloadURL;
            downloadEvent("pickcoin_store_ios_update_click");
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