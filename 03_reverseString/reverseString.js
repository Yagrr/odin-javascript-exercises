const reverseString = function(str) {
    let split_str = str.split("");
    split_str.reverse();
    return split_str.join('');
};

// Do not edit below this line
module.exports = reverseString;
