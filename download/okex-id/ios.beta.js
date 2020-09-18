new Vue({
    el: '#app',
    data: function () {
        return {
            logo: './images/logo-ios-beta.png',
            logo2: './images/logo-ios-beta-step-2.gif',
            name: 'OKEx Beta Version',
            activeName: 'first',
            loading: false,
            creditLoading: false,
            install: 'Click to Install the Beta Version',
            step1Title: "Beta Version Features",
            creditTitle: 'Trust OKEx Beta Version Certificate',
            setp_2_tips_1: 'After installation, click the button below to give us the access',
            setp_2_tips_2_1: 'After installation, find OKEx Beta Version Certificate via ',
            setp_2_tips_2_2:  `'Settings' - > 'General' - > 'Device Management' or 'Describe Documents & Device Management' `,
            setp_2_tips_2_3: `and click 'Trust ENN Group Co., Ltd.', then you can use OKEx Beta.`,
            credit_step_1_img: './images/ios-beta-credit-setp-1.png',
            credit_step_2_img: './images/ios-beta-credit-setp-2.png',
            iosBetaDownloadURL: 'itms-services://?action=download-manifest&url=https://ok-public-hk.oss-cn-hongkong.aliyuncs.com/upgradeapp/install-manifest.plist',
            tipsData: [
                { icon: '../v2/icon/icon-ios-checkmark.png', title: 'Can install the latest version that are not supported by Apple Store' },
                { icon: '../v2/icon/icon-ios-info.png', title: 'Upgrade needs to be downloaded and installed again' },
                { icon: '../v2/icon/icon-ios-info.png', title: `Apple's policy may lead to occasional inaccessibility` }
            ],
        }
    },
    mounted: function () {
        // 重定向回首页
        // window.location.href="ios.html"
    },
    methods: {
        handleDownload() {
            this.loading = true;
            this.install = 'Installing...';
            window.location.href = this.iosBetaDownloadURL;
            downloadEvent("okex_ios_install_click");
            scrollTo("#step-2-content");
            setTimeout(() => {
                this.install = 'Click to Install the Beta Version';
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