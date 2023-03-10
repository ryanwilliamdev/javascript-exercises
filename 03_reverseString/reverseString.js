const reverseString = function(str) {
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}
// const inputString = prompt("Enter a string: ");
// const result = reverseString(inputString);
// alert(result);
// Do not edit below this line
module.exports = reverseString;
