//39、找出数组中出现次数超过一半的数字
//思路1：利用快排，随机选取一个数，比它小的在左边，比它大的在右边。如果恰好坐标为 n/2 则为中位数。
//大于 n/2 向左找 ，小于 n/2 向右找

function MoreThanHalfNum(numbers, length) {
    if (CheckInvalidArray(numbers, length)) {
        return 0;
    }

    let mid = length >> 1;
    let start = 0;
    let end = length - 1;
    let index = partition(numbers, length, start, end);
    while (index !== mid) {
        if (index > mid) {
            end = index - 1;
            index = partition(numbers, length, start, end);
        } else {
            start = index + 1;
            index = partition(numbers, length, start, end);
        }
    }
    let result = numbers[mid];
    if (!CheckMoreThanHalf(numbers, length, result)) {
        result = 0;
    }
    return result;
}

let g_InputInvalid = false;

function CheckInvalidArray(numbers, length) {
    g_InputInvalid = false;
    if (numbers === null || length <= 0) {
        g_InputInvalid = true;
    }
    return g_InputInvalid;
}

function CheckMoreThanHalf(numbers, length, number) {
    let times = 0;
    for (let i = 0; i < length; i++) {
        if (numbers[i] === number) {
            times++;
        }
    }

    let isMoreThanHalf = true;

    if (times * 2 <= length) {
        g_InputInvalid = true;
        isMoreThanHalf = false;
    }

    return isMoreThanHalf;
}

function partition(data, len, start, end) {
    if (data === null || len <= 0 || start < 0 || end >= len) {
        throw "Invalid Parameters";
    }

    let index = RandomInRange(start, end);
    [data[index], data[end]] = Swap(data[index], data[end]);

    let small = start - 1;
    for (index = start; index < end; index++) {
        if (data[index] < data[end]) {
            small++;
            if (small !== index) {
                [data[index], data[small]] = Swap(data[index], data[small]);
            }
        }
    }

    ++small;
    [data[small], data[end]] = Swap(data[small], data[end]);
    return small;
}

function RandomInRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

function Swap(start, end) {
    let t = start;
    start = end;
    end = t;
    return [start, end];
}



//思路2：保存数字和次数

function MoreThanHalfNum2(numbers, length) {
    if (CheckInvalidArray(numbers, length)) {
        return 0;
    }

    let result = numbers[0];
    let times = 1;

    for (let i = 0; i < length; i++) {
        if (times === 0) {
            result = numbers[i];
            times = 1;
        } else if (numbers[i] === result) {
            times++;
        } else {
            times--;
        }
    }
    if (!CheckMoreThanHalf(numbers, length, result)) {
        result = 0;
    }
    return result;
}