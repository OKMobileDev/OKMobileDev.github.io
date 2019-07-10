Vue.component('wechat-tips-view', {
    data: function () {
        return {
            img: '',
        }
    },
    created: function () {
        if (isiOS() == true) {
            this.img = '../v2/images/wx-ios-tips.png';
        }else {
            this.img = '../v2/images/wx-android-tips.png';
        }
    },
    template: `
    <div class="wx-tip">
        <el-image class="wx-tip-img" :src="img" fit="contain"></el-image>
    </div>
    `
});

/**
 * 设备判断
 */
function isiOS() {
    let u = navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return isiOS
}