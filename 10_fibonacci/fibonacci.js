const fibonacci = function(iteration) {
    let entier = Number(iteration);
    if (entier < 0) return "OOPS";
    if (entier == 0) return 0;
    if (entier == 1 || entier == 2) return 1;
    let n1 = 1;
    let n2 = 1;
    let total = 0;
    for (i = 2; i < entier; i++) {
        total = n1 + n2;
        n1 = n2;
        n2 = total;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
