//46、数字翻译成字符串并统计多少种方法
//思路：递归，但存在重复子问题，自下向上解决
//f(i) = f(i + 1) + g(i, i + 1) * f (i + 2), g(i, i + 1) = 0 / 1

function GetTranslationCount(number) {
    if (number < 0) {
        return 0;
    }

    let strNum = number.toString();
    return GetCount(strNum);
}

function GetCount(strNum) {
    let len = strNum.length;
    let counts = new Array(len);
    let count = 0;
    for (let i = len - 1; i >= 0; i--) {
        count = 0;
        if (i < len - 1) {
            count = counts[i + 1];
        } else {
            count = 1;
        }

        if (i < len - 1) {
            let digit1 = strNum[i] - '0';
            let digit2 = strNum[i + 1] - '0';
            let converted = digit1 * 10 + digit2;
            if (converted >= 10 && converted <= 25) {
                if (i < len - 2) {
                    count += counts[i + 2];
                } else {
                    count += 1;
                }
            }
        }
        counts[i] = count;
    }
    count = counts[0];
    counts = null;
    return count;
}