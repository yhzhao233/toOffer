function minNumberInRotateArray(rotateArray)
{
    if (rotateArray.length === 0) {
        return 0;
    } else {
        var arr = rotateArray.sort(function (a, b) { return a - b });
        return arr[0];
    }
}