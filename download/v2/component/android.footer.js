Vue.component('android-install-footer', {
    data: function () {
        return {
            install: '安装 Android 版',
            loading: false,
        }
    },
    methods: {
        handleDownload () {
            this.install = '正在安装...';
            this.loading = true;
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