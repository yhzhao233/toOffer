//50.找到第一个仅出现一次的字符
//思路：使用一个对象用来存每个字符出现的次数

function FirstNotRepeatingChar(str) {
    if (str === null) {
        return;
    }
    let hashTable = {};
    let length = str.length;
    for (let i = 0; i < length; i++) {
        if (!hashTable[str[i]]) {
            hashTable[str[i]] = 1;
        } else {
            hashTable[str[i]]++;
        }
    }

    for (let i = 0; i < length; i++) {
        if (hashTable[str[i]] === 1) {
            return str[i];
        }
    }
}