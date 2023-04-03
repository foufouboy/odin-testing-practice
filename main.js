// 1

const capitalize = (str) => {

    if (typeof str !== "string") return "";

    let res = str;

    res = res.split("");
    res[0] = res[0].toUpperCase();
    res = res.join("");

    return res;
}

// 2

const reverseString = (str) => {

    if (typeof str !== "string") return "";

    let res = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }

    return res;
};

// 3

const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
};

// 4

const caesarCipher = (str, shift) => {
    // This func is awfull but it work so meh

    if (typeof str !== "string" || 
        typeof shift !== "number") return "";

    const majAlphabet = (function(){
        const res = [];

        for (let i = 65; i <= 90; i++) res.push(String.fromCharCode(i));

        return res;
    })();

    const minAlphabet = (function(){
        const res = [];

        for (let i = 97; i <= 122; i++) res.push(String.fromCharCode(i));

        return res;
    })();

    return str.split("").reduce((res, c) => {
        if (c.toLowerCase() === c.toUpperCase()) { // not alphabet
            return res + c;
        } else if (c === c.toLowerCase()) { // lower case
            let place = minAlphabet.indexOf(c);
            return res + minAlphabet[(place + shift) % 26];
        } else { // upper case
            let place = majAlphabet.indexOf(c);
            return res + majAlphabet[(place + shift) % 26];
        }
    }, "");
};

// 5

const analyzeArray = (arr) => {
    if (!(arr instanceof Array) ||
        arr.some(e => typeof e !== "number")) return null;

    return {
        average: arr.reduce((a, n) => a + n) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };
};

export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};
