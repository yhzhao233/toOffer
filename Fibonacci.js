//使用递归有严重效率问题，计算量随着 n 急速增大
//思路：从下向上计算，记录每一次的值，避免重复计算

function fibonacci(n)
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
