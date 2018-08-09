//45.把数组中的数连接起来排成最小的数
//思路：两两比较，看谁应在前,拼接比较可能超出最大整数范围，大数问题

let g_MaxNumberLength = 10;
let comStr1 = new Array(2 * g_MaxNumberLength + 1);
let comStr2 = new Array(2 * g_MaxNumberLength + 1);


function PrintMinNumber(numbers, length) {
    if (numbers === null || length <= 0) {
        return;
    }
    let chars = numbers.map((v) => v.toString());
    if (length === 1) {
        return chars[0];
    }
    chars.sort((a, b) => a + b > b + a);
    console.log(chars);
    let str = '';
    for (let i = 0; i < chars.length; i++) {
        str += chars[i];
    }

    return str;
}


PrintMinNumber([3,32,321], 3);


let numbers = [3,32,321,3231,1111,4444,32352,34];
let length = 8;
