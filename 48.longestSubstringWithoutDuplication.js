//48.最长不含重复字符的子字符串
//思路：

function longestSubstringWithoutDuplication(str) {
    let curLength = 0;
    let maxLength = 0;
    let position = new Array(26).fill(-1);

    for (let i = 0; i < str.length; i++) {
        let preIndex = position[str[i].charCodeAt() - 'a'.charCodeAt()];
        if (preIndex < 0 || i - preIndex > curLength) {
            curLength++;
        } else {
            if (curLength > maxLength) {
                maxLength = curLength;
            }

            curLength = i - preIndex;
        }
        position[str[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }
    if (curLength > maxLength) {
        maxLength = curLength;
    }
    return maxLength;
}