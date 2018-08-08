

function ReorderOddEven(data, length) {
    Reorder(data, length, isEven);
}




function Reorder(data, length, func) {
    if (data === null || length === 0 || func === null) {
        return;
    }

    let begin = 0;
    let end = length - 1;

    while (begin < end) {
        while (begin < end && !func(data[begin])) {
            begin++;
        }

        while (begin < end && func(data[end])) {
            end--;
        }
        if (begin < end) {
            exec(data, begin, end);
        }
    }
}

function exec(data, begin, end) {
    let temp = data[begin];
    data[begin] = data[end];
    data[end] = temp;
}

function isEven(num) {
    return (num & 1) === 0;
}


var data = [2,4,1,5,4,3,1,5,6,3,4];
var len = data.length;

ReorderOddEven(data, len);