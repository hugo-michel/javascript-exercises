const reverseString = function(string) {
    let array = string.split("");
    let reversed = array.reverse().join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
