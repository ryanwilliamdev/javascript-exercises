const repeatString = function(str, num) {
    let inputString = '';
    for (i = 0; i < num; i++) {
        inputString += str;
    }
    return inputString;
};
repeatString('hey', 3);
// repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
