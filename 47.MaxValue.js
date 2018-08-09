//47、礼物的最大价值
//思路：找递归公式，f(i,j) = max(f(i-1,j),f(i,j-1)) + gift[i,j]
//1:用二维矩阵保存到达每个点时的最大价值


function getMaxValue1(values, rows, cols) {
    if (values === null || rows <= 0 || cols <= 0) {
        return 0;
    }

    let maxValue = new Array(rows);
    for (let i = 0; i < rows; i++) {
        maxValue[i] = new Array(cols);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let left = 0;
            let up = 0;
            if (i > 0) {
                up = maxValue[i - 1][j];
            }
            if (j > 0) {
                left = maxValue[i][j - 1];
            }
            maxValue[i][j] = Math.max(up, left) + values[i * cols + j];
        }
    }
    let max = maxValue[rows - 1][cols - 1];
    maxValue = null;
    return max;
}


let values = [1,10,3,8,12,2,9,6,5,7,4,11,3,7,16,5];
let cols = 4;
let rows = 4;

let max = getMaxValue2(values, rows, cols);

//有些用不到的数据也保存了下来，优化，用一维数组存值
//j左侧的值即是j左侧的值，j及j右侧的值为正上方及右上方的值，每行完了覆盖
function getMaxValue2(values, rows, cols) {
    if (values === null || rows <= 0 || cols <= 0) {
        return 0;
    }

    let maxValue = new Array(cols);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let left = 0;
            let up = 0;
            if (i > 0) {
                up = maxValue[j];
            }
            if (j > 0) {
                left = maxValue[j - 1];
            }
            maxValue[j] = Math.max(up, left) + values[i * cols + j];
        }
    }
    let max = maxValue[cols - 1];
    maxValue = null;
    return max;
}
