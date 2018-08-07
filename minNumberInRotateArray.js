function minNumberInRotateArray(arr) {
    if (arr === null) {
        throw "Invalid parameters";
    }
    let lo = 0;
    let hi = arr.length - 1;
    let index = lo;//前零个元素挪到后面时，最小值仍为第一个。若arr[lo] < arr[hi]，直接返回第一个
    while (arr[lo] >= arr[hi]) {
        if (hi - lo === 1) {
            index = hi;
            break;
        }

        index = Math.floor((lo + hi) / 2);

        // lo,hi,index 三者相同时只能顺序查找
        if (arr[lo] === arr[hi] && arr[lo] === arr[index]) {
            return MinInOrder(arr, lo, hi);
        }

        if (arr[index] >= arr[lo]) {
            lo = index;
        } else if (arr[index] <= arr[hi]) {
            hi = index;
        }
    }
    return arr[index];
}

function MinInOrder(arr, lo, hi) {
    let result = arr[lo];
    for (let i = lo + 1; i <= hi; i++) {
        if (arr[i] < result) {
            result = arr[i];
        }
    }
    return result;
}