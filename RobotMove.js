//13、机器人的移动范围
//回溯法

function movingCount(threshold, rows, cols) {
    if (threshold < 0 || rows <= 0 || cols <= 0) {
        return 0;
    }

    let visited = [];
    for (let i = 0; i < rows * cols; i++) {
        visited.push(false);
    }

    let count = movingCountCore(threshold, rows, cols, 0, 0, visited);

    return count;
}


function movingCountCore(threshold, rows, cols, row, col, visited) {
    let count = 0;
    if (check(threshold, rows, cols, row, col, visited)) {
        visited[row * cols + col] = true;

        count = 1 + movingCountCore(threshold, rows, cols, row - 1, col, visited)
            + movingCountCore(threshold, rows, cols, row, col - 1, visited)
            + movingCountCore(threshold, rows, cols, row + 1, col, visited)
            + movingCountCore(threshold, rows, cols, row, col + 1, visited);
    }
    return visited;
}

function check(threshold, rows, cols, row, col, visited) {
    if (row >= 0 && row < rows && col >= 0 && col < cols
        && getDigitSum(row) + getDigitSum(col) <= threshold
        && !visited[row * cols + col]) {
        return true;
    }
    return false;
}

function getDigitSum(num) {
    let sum = 0;
    while (num >= 10) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    sum += num;
    return sum;
}


