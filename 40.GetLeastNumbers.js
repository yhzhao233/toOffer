//40、找出最小的k个数
//思路1：利用快排，会修改输入的数组 O(n)
//思路2：O(nlogk)红黑树或堆

function GetLeastNumbers(input, n, output, k) {
    if (input === null || output === null || k > n || n <= 0 || k <= 0) {
        return;
    }

    let start = 0;
    let end = n - 1;
    let index = partition(input, n, start, end);
    while (index !== k - 1) {
        if (index > k - 1) {
            end = index - 1;
            index = partition(input, n, start, end);
        } else {
            start = index + 1;
            index = partition(input, n, start, end);
        }
    }

    for (let i = 0; i < k; i++) {
        output.push(input[i]);
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


