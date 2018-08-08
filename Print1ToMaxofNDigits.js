//思路：因为不清楚 n 有多大，考虑用数组保存
//未超过最大值时输出数字

function Print1ToMaxofNDigits(n) {
    if (n <= 0) {
        return;
    }
    let number = Array(n).fill(0);
    while (!Increment(number)) {
        PrintNumber(number);
    }

    number = null;
}

function Increment(number) {
    let isOverflow = false;
    let nTakeOver = 0; //用于判断是否需要进位
    let nLen = number.length;
    for (let i = nLen - 1; i >= 0; i--) {
        let sum = number[i] + nTakeOver;
        if (i === nLen - 1) {
            sum++;
        }
        if (sum >= 10) {
            if (i === 0) {
                isOverflow = true;//最高位为 10 时溢出
            } else {
                sum -= 10;
                nTakeOver = 1;
                number[i] = sum;
            }
        } else {
            number[i] = sum;
            break;
        }
    }
    return isOverflow;
}

function PrintNumber(number) {
    let index = 0;
    let isAll0 = true;
    let len = number.length;
    for (let i = 0; i < len; i++) {
        if (number[i] !== 0) {
            index = i;
            isAll0 = false;
            break;
        }
    }
    //index 为 0 有两种情况，用标记判断是否全0
    if (isAll0) {
        return;
    }
    console.log(number.slice(index, len).join(''));
}

Print1ToMaxofNDigits2(3);


//思路2：全排列方法

function Print1ToMaxofNDigits2(n) {
    if (n <= 0) {
        return;
    }

    let number = Array(n);
    for (let i = 0; i < 10; i++) {
        number[0] = i;
        Print1ToMaxofNDigitsRecursively(number, n, 0);
    }
    number = null;
}

function Print1ToMaxofNDigitsRecursively(number, len, index) {
    if (index === len - 1) {
        PrintNumber(number);
        return;
    }
    for (let i = 0; i < 10; i++) {
        number[index + 1] = i;
        Print1ToMaxofNDigitsRecursively(number, len, index + 1);
    }
}