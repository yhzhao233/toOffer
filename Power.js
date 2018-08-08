
let g_InvalidInput = false;

function Power(base, exponent) {

    g_InvalidInput = false;
    
    if (equal(base, 0) && exponent < 0) {
        g_InvalidInput = true;
        return 0;
    }

    let absExponent = exponent;

    if (exponent < 0) {
        absExponent = -exponent;
    }

    let result = PowerWithExponent(base, absExponent);
    if (exponent < 0) {
        result = 1.0 / result;
    }

    return result;

}


function PowerWithExponent(base, absExponent) {
    if (absExponent === 0) {
        return 1;
    }
    if (absExponent === 1) {
        return base;
    }

    let result = PowerWithExponent(base, absExponent >> 1);
    result *= result;

    if (absExponent & 1 === 1) {
        result *= base;
    }

    return result;
}

function equal(base, ref) {
    return Math.abs(base - ref) < Number.EPSILON;
}

//当exponent为负数时转化为正数计算，最右边一位为1时，result *= base
//指数每右移一位实际上是base——>base^2