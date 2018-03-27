function NumberOf1(n)
{
    var one = 0;
    while (n) {
        one++;
        n = n & (n - 1);
    }
    return one;
}