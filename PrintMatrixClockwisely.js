//29、顺时针打印矩阵
//思路：先确定结束条件，之后每次分四个方向打印

function PrintMatrixClockwisely(numbers, cols, rows) {
    if (numbers === null || cols <= 0 || rows <= 0) {
        return;
    }

    let start = 0;
    let arr = [];
    while (cols > start * 2 && rows > start * 2) {
        PrintMatrixInCircle(numbers, cols, rows, start, arr);
        start++;
    }
    let str = arr.join(',');
    console.log(str);
}


function PrintMatrixInCircle(numbers, cols, rows, start, arr) {
    let endX = cols - 1 - start;
    let endY = rows - 1 - start;

    //左到右
    for (let i = start; i <= endX; i++) {
        let number = numbers[start][i];
        arr.push(number);
    }
    //上到下
    if (start < endY) {
        for (let i = start + 1; i <= endY; i++) {
            let number = numbers[i][endX];
            arr.push(number);
        }
    }

    //右到左

    if (start < endX && start < endY) {
        for (let i = endX - 1; i >= start; i--) {
            let number = numbers[endY][i];
            arr.push(number);
        }
    }

    if (start < endX && start < endY - 1) {
        for (let i = endY - 1; i > start; i--) {
            let number = numbers[i][start];
            arr.push(number);
        }
    }
}

let numbers = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

PrintMatrixClockwisely(numbers, 4, 4);