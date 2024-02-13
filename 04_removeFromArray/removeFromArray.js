const removeFromArray = function(numbers, ...arg) {
    // let result = numbers.filter((number) => !(number === arg));
    let result = numbers.filter((number) => !arg.includes(number));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
