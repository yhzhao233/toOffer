//42.连续子数组的最大和
//思路：有正数也有负数，当子数组和小于 0 时，抛弃之前的和

let g_InvalidInput = false;

function FindGreatestSumOfSubArray(data, length) {
    if (data === null || length <= 0) {
        g_InvalidInput = true;
        return 0;
    }

    g_InvalidInput = false;

    let curSum = 0;
    let GreatestSum = 0;
    for (let i = 0; i < length; i++) {
        if (curSum <= 0) {
            curSum = data[i];
        } else {
            curSum += data[i];
        }

        if (curSum > GreatestSum) {
            GreatestSum = curSum;
        }
    }
    return GreatestSum;
}


FindGreatestSumOfSubArray([1,-2,3,10,-4,7,2,-5]);