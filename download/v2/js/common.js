/**
 * 获取账号数据
 */
function getAppStoreAccountData() {
    var result;
    $.ajax({
        url: '../v2/resources/account.json',
        async: false,
        success: function (data) {
            result = data;
        }
    });
    return result;
}