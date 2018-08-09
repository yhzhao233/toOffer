//44.数字序列中某一位的数字
//思路：确定根据位数确定该位属于几位数,再确定是哪个数字的哪一位

function digitAtIndex(index) {
    if (index < 0) {
        return -1;
    }

    let digits = 1;
    while (true) {
        let numbers = countOfIntegers(digits);
        if (index < numbers * digits) {
            return digitAtNum(index, digits);
        }
        index -= digits * numbers;
        digits++;
    }
    return -1;
}

function countOfIntegers(digits) {
    if (digits === 1) {
        return 10;
    }
    let count = Math.pow(10, digits - 1);
    return 9 * count;
}

function digitAtNum(index, digits) {
    let number = beginNumber(digits) + Math.floor(index / digits);
    let indexFromRight = digits - index % digits;
    for (let i = 1; i < indexFromRight; i++) {
        number = Math.floor(number / 10);
    }
    return number % 10;
}


function beginNumber(digits) {
    if (digits === 1) {
        return 0;
    }
    return Math.pow(10, digits - 1);
}