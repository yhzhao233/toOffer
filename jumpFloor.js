function jumpFloor(n)
{
    let result = [0, 1];
    if (n < 2) {
        return result[n];
    }

    let fibNMinusOne = 1;
    let fibNMinusTwo = 0;
    let fibN = 0;
    for (let i = 2; i <= n; i++) {
        fibN = fibNMinusOne + fibNMinusTwo;
        fibNMinusTwo = fibNMinusOne;
        fibNMinusOne = fibN;
    }

    return fibN;
}

//青蛙每次一跳相对于上一次只有一个台阶或者两个台阶，总跳法f(n - 1) + f(n - 2),斐波那契