new Vue({
    el: '#app',
    data: function () {
        return {
            logo: '../test/images/logo-ios-beta.png',
            name: 'OKEx 内测版',
            activeName: 'first',
            loading: false,
            install: '点击安装内测版',
            step1Title: "内测版特征",
            tipsData: [
                { icon: '../v2/icon/icon-ios-checkmark.png', title: '无须海外 Apple ID，可直接安装' },
                { icon: '../v2/icon/icon-ios-info.png', title: '更新需要重新下载安装' },
                { icon: '../v2/icon/icon-ios-info.png', title: '内测版 App 开发证书被禁用等问题' }
            ],
        }
    },
    methods: {
        handleDownload() {
            alert('下载 beta');
            this.loading = true;
            this.install = '正在安装...';
        }
    }
});