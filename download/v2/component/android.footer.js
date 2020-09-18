Vue.component('android-install-footer', {
    props: ['install'],
    data: function () {
        return {
            loading: false,
        }
    },
    methods: {
        handleDownload() {
            if (isWeChat() == false) {
                var originInstallTitle = this.install;
                let locale = ((navigator.language) ? navigator.language : navigator.userLanguage).substr(0, 2);
                if (locale == 'zh') {
                    this.install = '正在安装...';
                } else {
                    this.install = ' ';
                }
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.install = originInstallTitle;
                }, 3000);
            }
            this.$emit('android-click');
        }
    },
    template: `
    <div style="position: fixed; background-color: white; bottom: 0; height: 79px; width: 100%; max-width: 500px; z-index: 999; box-shadow:0px 2px 4px 0px rgba(48,117,238,1);">
        <el-row type="flex" style="margin-top: 19px; margin-bottom: 19px;" justify="center" align="middle">
            <el-button type="primary" style="width: 280px; font-size: 14px; background-color: #3075EE; border-width: 0px" :loading="loading" @click="handleDownload"><i class="icon iconfont icon-el-icon-android""></i>&nbsp&nbsp{{ install }}</el-button>
        </el-row>
    </div>
    `
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