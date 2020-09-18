window.onload = function () {
    //删除空格
    var location = window.location.toString();
    var newLocation = decodeURI(location);
    newLocation = ignoreSpaces(newLocation);
    if (location !== newLocation) {
        window.location = newLocation;
    }
}

function ignoreSpaces(Str) {
    var ResultStr = "";
    Temp = Str.split(" "); //双引号之间是个空格；
    for (i = 0; i < Temp.length; i++)
        ResultStr += Temp[i];
    return ResultStr;
}