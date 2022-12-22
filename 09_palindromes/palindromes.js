const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.toLowerCase().match(/[a-z0-9]/g).join('');
    let left = 0;
    let right = word.length - 1;
    while (left < right) {
        if (word.charAt(left) == word.charAt(right)) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
