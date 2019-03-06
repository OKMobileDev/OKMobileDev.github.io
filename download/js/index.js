window.onload = function () {
    let u = navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    //获取参数
    var query = window.location.search;

    //跳转目标页面
    if (isiOS) {
        window.location = 'ios.html' + query
    } else {
        window.location = 'android.html' + query
    }
}