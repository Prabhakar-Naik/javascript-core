function add(num1, num2) {
    return num1 + num2;
}
     
function subtract(num1, num2) {
    return num1 - num2;
}
     
function multiply(num1, num2) {
    return num1 * num2;
}
     
function divide(num1, num2) {
    return num1 / num2;
}
     
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(calculator(2,3,add));

console.log(calculator(3,3,multiply));

console.log(calculator(5,2,subtract));

console.log(calculator(12,3,divide));
