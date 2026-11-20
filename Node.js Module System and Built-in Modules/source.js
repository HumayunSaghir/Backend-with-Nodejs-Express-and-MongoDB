function addNumbers(num1, num2){
    return (num1 + num2)
}

function subNumbers(num1, num2){
    return (num1 - num2)
}

// module.exports = addNumbers
// module.exports = subNumbers
// module.exports = {
//     add : addNumbers,
//     sub : subNumbers,
// }
exports.add = addNumbers
exports.sub = subNumbers
exports.greet = () => console.log("Hello")