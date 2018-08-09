//31、栈的压入弹出
//思路：如果下一个弹出的数字刚好是栈顶数字则直接弹出，如果不是则继续压栈，直到下一个需要弹出的数字
//所有数字都压入后如果仍没有找到下一个，则不可能是一个弹出序列

function isPopOrder(pPush, pPop, length) {
    let Possible = false;
    if (pPush !== null && pPop !== null && length > 0) {
        let pNextPush = 0;
        let pNextPop = 0;

        let data = [];

        while (pNextPop < length) {
            while (data.length === 0 || data[data.length - 1] !== pPop[pNextPop]) {
                if (pNextPush === length) {
                    break;
                }
                data.push(pPush[pNextPush]);
                pNextPush++;
            }

            if (data[data.length - 1] !== pPop[pNextPop]) {
                break;
            }
            data.pop();
            pNextPop++;
        }
        if (data.length === 0 && pNextPop === length) {
            Possible = true;
        }
    }
    return Possible;
}

//测试用例
isPopOrder([1,2,3,4,5],[4,5,3,2,1],5);
isPopOrder([1,2,3,4,5],[4,3,5,1,2],5);
isPopOrder(null, null, 5);