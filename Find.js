function Find(target, array)
{
    var row = 0;
    var col = array[row].length - 1;
    while (row < array.length && col > 0) {
        if (array[row][col] < target) {
            row++;
        } else if (array[row][col] > target) {
            col--;
        } else {
            return true;
        }
    }
    return false;
}