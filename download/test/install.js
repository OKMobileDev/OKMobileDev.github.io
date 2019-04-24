// document.getElementById('install').onclick = function () {



//     let url = "http://pv.sohu.com/cityjson?ie=utf-8"
//     $.getJSON(url,function(data,status) {
//         alert('asd')
//         console.log(data);
//     });

//     // -1 < navigator.userAgent.indexOf("iPhone") || -1 < navigator.userAgent.indexOf("iOS") ? window.location.href = "itms-services://?action=download-manifest&url=https://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/install-manifest.plist" : window.location.href = "http://upgradeapp.oss-cn-hangzhou.aliyuncs.com/upgradeapp/OKEx-android.apk"
// }

$(".button").click(function () {
    // let url = "http://pv.sohu.com/cityjson?ie=utf-8"
    // let url = "/download/vendor/jquery-3.3.1.min.js"
    let url = "https://www.baidu.com"
    $.get(url, function (data, status) {
        // alert('asd')
        // console.log(data);
        // alert(data)
        alert("还差")
    });

    const params = {
        method: "GET",
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow',
    }

    fetch(url, params)
        .then(data => {
            alert('111')
            return data.json
        })
        .then(res => {
            alert('222')
            console.log(res);
        })
        .catch(error => {
            alert('333')
            alert(error)
        })
});