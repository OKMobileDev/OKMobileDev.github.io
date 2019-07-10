Vue.component('ios-install-footer', {
    data: function () {
        return {
            installAppstore: 'App Store',
            installBeta: '安装内测版',
        }
    },
    methods: {
        handleAppstoreDownload () {
            this.$emit('ios-appstore-click');
        },
        handleBetaDownload () {
            this.$emit('ios-beta-click');
        }
    },
    template: `
    <div style="position: fixed; display: inline; background-color: white; bottom: 0; height: 130px; width: 100%; max-width: 500px; z-index: 999; box-shadow:0px 2px 4px 0px rgba(48,117,238,1);">
        <div style="display: flex;width: 100%; height:100%;">
            <div style="position: flex; width: 50%;">
                <div style="display: flex;">
                    <el-button type="primary" style="width: 80%; height: 40px; margin-left:auto; margin-right: auto; margin-top: 17px; font-size: 14px; background-color: #333333; border-width: 0px" @click="handleAppstoreDownload">
                        <i class="icon iconfont icon-el-icon-apple""></i>&nbsp&nbsp{{ installAppstore }}
                    </el-button>
                    <img style="position: absolute; margin-top: 8px; left: 42%; width: 24px; height: 24px;" src="../v2/icon/icon-ios-recommend.png"/>
                </div>
                <div>
                    <div style="margin-top: 16px; text-align: center; font-size: 14px; font-weight: 900; color: #333333;">稳定安全，更新方便快捷</div>
                    <div style="margin-top: 2px; text-align: center; font-size: 14px; color: #333333; font-family: Arial, Helvetica, sans-serif;">免费提供公共 Apple ID</div>
                </div>
            </div>
            <div style="position: flex; width: 50%;">
                <div style="display: flex;">
                    <el-button type="primary" style="width: 80%; height: 40px; margin-left:auto; margin-right: auto; margin-top: 17px; font-size: 14px; background-color: #ffffff; color: #000; border-width: 1px; border-color: #000;" @click="handleBetaDownload">{{ installBeta }}</el-button>
                </div>
                <div>
                    <div style="margin-top: 16px; text-align: center; font-size: 14px; font-weight: 900; color: #333333;">安装简便快捷</div>
                    <div style="margin-top: 2px; text-align: center; font-size: 14px; color: #333333; font-family: Arial, Helvetica, sans-serif;">更新需要再次安装</div>
                </div>
            </div>
        </div>
    </div>
    `
});
