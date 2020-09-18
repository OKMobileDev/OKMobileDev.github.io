new Vue({
    el: '#app',
    data: function () {
        return {
            logo: './images/logo-ios-beta.png',
            logo2: './images/logo-ios-beta-step-2.png',
            name: '安装 99EX',
            activeName: 'first',
            loading: false,
            creditLoading: false,
            install: '点击安装内测版',
            step1Title: "内测版特点",
            creditTitle: '去信任 99EX 证书',
            setp_2_tips_1: '安装完成后, 点击下方按钮, 即可授信',
            setp_2_tips_2_1: '下载成功后，请点击',
            setp_2_tips_2_2: '【设置】-【通用】-【设备管理】或 【描述文件与设备管理】',
            setp_2_tips_2_3: '找到 99EX 的证书并点击信任，即可使用 99EX',
            credit_step_1_img: './images/ios-beta-credit-setp-1.png',
            credit_step_2_img: './images/ios-beta-credit-setp-2.png',
            iosBetaDownloadURL: 'itms-services://?action=download-manifest&url=https://hkpublic.oss-accelerate.aliyuncs.com/upgradeapp/install-99ex-manifest.plist',
            tipsData: [
                { icon: '../v2/icon/icon-ios-checkmark.png', title: '无须海外 Apple ID，可直接安装' },
                { icon: '../v2/icon/icon-ios-info.png', title: '更新需要重新下载安装' },
                { icon: '../v2/icon/icon-ios-info.png', title: '苹果政策导致存在偶尔无法使用的情况' }
            ],
        }
    },
    mounted: function () {
        window.location.href="ios.html"
    },
    methods: {
        handleDownload() {
            this.loading = true;
            this.install = '正在安装...';
            window.location.href = this.iosBetaDownloadURL;
            downloadEvent("99ex_ios_install_click");
            scrollTo("#step-2-content");
            setTimeout(() => {
                this.install = '点击安装内测版';
                this.loading = false;
            }, 3000);
        },
        handleCredit() {
            this.creditLoading = true;
            window.location.href = '../v2/resources/setting.mobileprovision';
            setTimeout(() => {
                this.creditLoading = false;
            }, 3000);
        }
    }
});

function scrollTo(ele, speed){
	if(!speed) speed = 300;
	if(!ele){
		$("html,body").animate({scrollTop:0},speed);
	}else{
		if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top},speed);
	}
	return false;
}