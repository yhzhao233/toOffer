//19 正则匹配，包含 '.' 和 '*' 的正则表达式

function match(str, pattern) {
    if (str === null || pattern === null) {
        return false;
    }
    let strStart = 0;
    let patternStart = 0;
    return matchCore(str, pattern, strStart, patternStart);
}


function matchCore(str, pattern, strStart, patternStart) {
    if (strStart >= str.length && patternStart >= pattern.length) {
        return true;
    }
    if (strStart < str.length && patternStart >= pattern.length) {
        return false;
    }

    if (pattern[patternStart + 1] === '*') {
        if (pattern[patternStart] === str[strStart]
            || (pattern[patternStart] === '.' && strStart < str.length)) {
            return matchCore(str, pattern, strStart + 1, patternStart + 2)
            || matchCore(str, pattern, strStart + 1, patternStart)
            || matchCore(str, pattern, strStart, patternStart + 2);
        } else {
            return matchCore(str, pattern, strStart, patternStart + 2);
        }
    }
    if (str[strStart] === pattern[patternStart] || (pattern[patternStart] === '.' && strStart < str.length)) {
        return matchCore(str, pattern, strStart + 1, patternStart + 1);
    }

    return false;

}

match('aaa','ab*.*a');