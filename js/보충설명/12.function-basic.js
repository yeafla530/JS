//01.함수의 기본

//함수 선언
function doSomething() {
    console.log('hello');
}

//함수 호출
doSomething()

//02. 값을 리턴하는 함수
function add(a, b) {
    const sum = a + b;
    //더한값을 전달하고 싶을 때 return 사용
    return sum
}

const result = add(10, 20)
console.log(result)

//03. 함수를 인자로 전달
function dosum(add) {
    console.log(add)
    const result = add(2, 3);
    console.log(result)
}

//함수 자체 전달
dosum(add)

//함수호출 후 전달 하면 안됨
// dosum(add())


//04. 함수를 변수에 할당
const addFun = add;
console.log(add);
const res = addFun(1, 2)
console.log(res)
