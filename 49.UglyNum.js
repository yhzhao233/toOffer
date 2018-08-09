//49.丑数，求从小到大顺序的第 n 个丑数
//思路：创建数组保存已经找到的丑数，用空间换时间
//分别保存下一次 *2 *3 *5 会超过最大值的丑数的位置，每次更新避免不必要计算

function GetUglyNumber(index) {
    if (index <= 0) {
        return 0;
    }
    let uglyArr = new Array(index);
    uglyArr[0] = 1;
    let nextUglyIndex = 1;

    let Multiply2 = 0;
    let Multiply3 = 0;
    let Multiply5 = 0;

    while (nextUglyIndex < index) {
        let min = Math.min(uglyArr[Multiply2] * 2,
            uglyArr[Multiply3] * 3,
            uglyArr[Multiply5] * 5
            );
        uglyArr[nextUglyIndex] = min;
        while (uglyArr[Multiply2] * 2 <= uglyArr[nextUglyIndex]) {
            Multiply2++;
        }
        while (uglyArr[Multiply3] * 3 <= uglyArr[nextUglyIndex]) {
            Multiply3++;
        }
        while (uglyArr[Multiply5] * 5 <= uglyArr[nextUglyIndex]) {
            Multiply5++;
        }
        nextUglyIndex++;
    }
    let ugly = uglyArr[nextUglyIndex - 1];
    return ugly;
}

