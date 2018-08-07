//12 回溯法求矩阵路径

function hasPath(matrix, rows, cols, str) {
    if (matrix === null || rows < 1 || cols < 1 || str === null) {
        return false;
    }

    let visited = [];
    for (let i = 0; i < rows * cols; i++) {
        visited.push(false);
    }

    let pathLength = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (hasPathCore(matrix, rows, cols, row, col, str, visited)) {
                return true;
            }
        }
    }
    return false;

    function hasPathCore(matrix, rows, cols, row, col, str, visited) {
        if (!str[pathLength]) {
            return true;
        }
        let hasPath = false;

        if (row >= 0 && row < rows && col >= 0 && col < cols
            && matrix[row * cols + col] === str[pathLength]
            && !visited[row * cols + col]) {
            pathLength++;
            visited[row * cols + col] = true;

            hasPath = hasPathCore(matrix, rows, cols, row, col - 1, str, visited)
                || hasPathCore(matrix, rows, cols, row - 1, col, str, visited)
                || hasPathCore(matrix, rows, cols, row, col + 1, str, visited)
                || hasPathCore(matrix, rows, cols, row + 1, col, str, visited);

            if (!hasPath) {
                pathLength--;
                visited[row * cols + col] = false;
            }
        }
        return hasPath;
    }
}


var matrix = ['a','c','j','b','f','d','t','c','e','g','s','h'];
var str = 'bfce';
hasPath(matrix, 4, 3, str);

