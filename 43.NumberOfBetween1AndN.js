//43.1~n 整数中 1 出现的次数
//思路：从最高位开始递归


function NumberOfBetween1AndN(n) {
    if (n <= 0) {
        return 0;
    }
    let str = '';
    str = n.toString().split('');

    return NumberOf1(str, 0);
}


function NumberOf1(str, start) {
    if (!str || start >= str.length || str[start] < '0' || str[start] > '9') {
        return 0;
    }

    let first = str[start] - '0';
    let length = str.length;
    if (length === 1 && first === 0) {
        return 0;
    }
    if (length === 1 && first > 0) {
        return 1;
    }

    let numFirstDigit = 0;
    if (first > 1) {
        numFirstDigit = Math.pow(10, length - 1);
    } else if (first === 1) {
        numFirstDigit = parseInt(str[start + 1]) + 1;
    }

    let numOtherDigits = first * (length - 1) * Math.pow(10, length - 2);
    let numRecursive = NumberOf1(str.slice(1), start);

    return numFirstDigit + numOtherDigits + numRecursive;
}



