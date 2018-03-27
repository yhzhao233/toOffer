function reOrderArray(array)
{
    // write code here
    var odd = [];
    var even = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            odd.push(array[i]);
        } else {
            even.push(array[i]);
        }
    }
    return odd.concat(even);
}