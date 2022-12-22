const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    let total = 0
    let min, max;
    if (num1 > num2) {
        min = num2;
        max = num1;
    } else {
        min = num1;
        max = num2;
    }

    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
