
//思路：一个整数与它减去1的结果做与运算，会把最右侧的1变成0，能做几次操作就表示有几个1
//循环次数想较于每次移一位少很多

function numberOf1(n)
{
    let count = 0;
    while (n) {
        count++;
        n = n & (n - 1);
    }
    return count;
}

NumberOf1(2735);