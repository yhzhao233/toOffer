


function maxProductAfterCutting_solution1(len) {
    if (len < 2) {
        return 0;
    }
    if (len === 2) {
        return 1;
    }
    if (len === 3) {
        return 2;
    }

    let products = [0, 1, 2, 3];
    let max = 0;

    for (let i = 4; i <= len; i++) {
        max = 0;
        for (let j = 1; j <= Math.floor(i / 2);j++) {
            let product = products[j] * products[i - j];
            if (max < product) {
                max = product;
            }
            products[i] = max;
        }
    }
    max = products[len];
    return max;
}

maxProductAfterCutting_solution1(8);

function maxProductAfterCutting_solution2(len) {
    if (len < 2) {
        return 0;
    }
    if (len === 2) {
        return 1;
    }
    if (len === 3) {
        return 2;
    }
    let timesOf3 = Math.floor(len / 3);
    if (len - timesOf3 * 3 === 1) {
        timesOf3 -= 1;
    }
    let timesOf2 = Math.floor((len - timesOf3 * 3) / 2);
    return Math.pow(3, timesOf3) * Math.pow(2, timesOf2);
}