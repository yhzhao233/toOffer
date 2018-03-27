function Power(base, exponent)
{
    // write code here
    var result = 1;
    var symbol = false;
    if (exponent < 0) {
        exponent = -exponent;
        symbol = true;
    }
    while (exponent !== 0) {
        if (exponent & 1) {
            result *= base;
        }
        base *= base;
        exponent =  exponent >> 1;
    }
    return symbol === true?(1/result):result;
}


//当exponent为负数时转化为正数计算，最右边一位为1时，result *= base
//指数每右移一位实际上是base——>base^2