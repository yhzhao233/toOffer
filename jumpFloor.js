function jumpFloor(number)
{
    if (number === 1) {
        return 1;
    } else if (number === 2) {
        return 2;
    } else {
        return jumpFloor(number - 1) + jumpFloor(number - 2);
    }
}

//青蛙每次一跳相对于上一次只有一个台阶或者两个台阶，总跳法f(n - 1) + f(n - 2),斐波那契