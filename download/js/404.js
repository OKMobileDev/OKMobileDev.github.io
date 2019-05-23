window.onload = function () {
    //删除空格
    var location = window.location.toString();
    var newLocation = decodeURI(location);
    if (location !== newLocation) {
        window.location = newLocation;
    }
}