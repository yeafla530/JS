//반복적으로 수행되는 일 함수로! 재사용

function add(a, b) {
    return a + b;
}

let result = add(10, 20)
console.log(result)

function divide(num1, num2) {
    return num1 / num2
}

function surprise(callback) {
    const result = callback(2, 5);
    console.log(result)
}
surprise(add);
surprise(divide);