//51.数组中的逆序对
//思路：分割数组再两两合并，过程中进行统计

function InversePairs(data, length) {
    if (data === null || length < 0) {
        return 0;
    }

    let copy = [];
    for (let i = 0; i < length; i++) {
        copy.push(data[i]);
    }
    let count = InversePairsCore(data, copy, 0, length - 1);

    return count;

}


function InversePairsCore(data, copy, start, end) {
    if (start === end) {
        copy[start] = data[start];
        return 0;
    }
    let length = Math.floor((end - start) / 2);
    let left = InversePairsCore(copy, data, start, start + length);
    let right = InversePairsCore(copy, data, start + length + 1, end);

    let i = start + length;
    let j = end;
    let indexCopy = end;
    let count = 0;
    while (i >= start && j >= start + length + 1) {
        if (data[i] > data[j]) {
            copy[indexCopy--] = data[i--];
            count += j - start -length;
        } else {
            copy[indexCopy--] = data[j--];
        }
    }
    for (; i >= start; i--) {
        copy[indexCopy--] = data[i];
    }
    for (; j >= start + length + 1; j--) {
        copy[indexCopy--] = data[j];
    }
    return left + right + count;
}

let data = [7,5,6,4];
let count = InversePairs(data, data.length);