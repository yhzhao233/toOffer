function replaceSpace(str)
{
    var str_new = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            str_new += '%20';
        } else {
            str_new += str[i];
        }
    }
    return str_new;
}