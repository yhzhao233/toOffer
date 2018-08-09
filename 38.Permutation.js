//尚未解决

function Permutation(str) {
    if (str === null) {
        return;
    }
    str = str.split('');
    exchange(str, 0);
    str =str.join('');
}

function exchange(str, pBegin) {
    if (pBegin >= str.length) {
        console.log(str);
    } else {
        for (let ch = pBegin; ch < str.length; ch++) {
            let temp = str[ch];
            str[ch] = str[pBegin];
            str[pBegin] = temp;

            exchange(str, pBegin + 1);

            temp = str[ch];
            str[ch] = str[pBegin];
            str[pBegin] = temp;
        }
    }
}

Permutation('abc');