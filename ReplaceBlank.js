//把字符串中的每个空格替换成“%20”
//思路 O（n）: 根据字符串中空格的数目扩展字符串长度,两个指针，一个在原字符串末尾位置，
// 一个在扩展后的字符串的末尾，同时向前扫描复制，遇到空格后者填充“%20”
//合并数组时，如果从前往后复制需要多次移动，则从后往前

function ReplaceBlank(str, length) {
    if (str === null || length <= 0) {
        return;
    }
    let originalLength = str.length;
    let numOfBlank = 0;
    for (let i = 0; i < originalLength; i++) {
        if (str[i] === ' ') {
            numOfBlank++;
        }
    }
    
    let newLength = originalLength + 2 * numOfBlank;
    if (newLength > length) {
        return;
    } 
    let indexOfOriginal = originalLength;
    let indexOfNew = newLength;
    let strArr = str.split('');
    
    while (indexOfOriginal >= 0 && indexOfNew > indexOfOriginal) {
        if (strArr[indexOfOriginal] === ' ') {
            strArr[indexOfNew--] = '0';
            strArr[indexOfNew--] = '2';
            strArr[indexOfNew--] = '%';
        } else {
            strArr[indexOfNew--] = strArr[indexOfOriginal];
        }
        indexOfOriginal--;
    }
    str = strArr.join('');
    return str;
}


ReplaceBlank('We are happy', 50);