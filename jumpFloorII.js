//每次跳可以在前一格的基础上跳1或者直接跳，二倍前一次的数量

function jumpFloorII(number)
{
    if (number <= 0) {
        return -1;
    } else if(number === 1) {
        return 1;
    } else {
        return 2 * jumpFloorII(number - 1);
    }
}