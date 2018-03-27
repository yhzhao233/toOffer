function rectCover(number)
{
    if (number <= 0) {
        return 0;
    } else if (number === 1 || number === 2) {
        return number;
    } else {
        return rectCover(number - 1) + rectCover(number - 2);
    }
}