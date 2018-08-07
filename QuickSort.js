//快排，

function quickSort(data, len, start, end) {
    if (start === end) {
        return;
    }
    let index = partition(data, len, start, end);
    if (index > start) {
        quickSort(data, len, start, index - 1);
    }
    if (index < end) {
        quickSort(data, len, index + 1, end);
    }
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


var data = [7,2,1,51,45,4,9];
var len = data.length;
var start = 1;
var end = 5;

quickSort(data, len, start, end);
console.log(data);