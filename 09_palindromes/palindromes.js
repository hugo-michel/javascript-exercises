const palindromes = function (str) {
    let regex = /[a-zA-Z0-9]+/g;
    let lettreUniquement = str.match(regex).join("").toLowerCase();
    let lettreUniquementInverse = lettreUniquement.split("").reverse().join("");
    return lettreUniquement === lettreUniquementInverse ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
