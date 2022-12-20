const reverseString = function(input) {
    let final = '';

    for (let i = input.length - 1; i >= 0; i--) {
        final += input.charAt(i);
        input = input.slice(0, i);
    }

    return final;
};

// Do not edit below this line
module.exports = reverseString;
