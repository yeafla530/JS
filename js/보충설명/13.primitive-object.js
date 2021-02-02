//number, string, boolean, null, undefined
//값 자체가 복사 됨
let age = 2;
let num = '2';
let copy = age;

age = 3
//복사된 값이 바뀌어도 적용안됨
console.log(copy) //2;

//위를 제외한 모든 변수들을 object라고 부름
//최소한 한두가지의 데이터를 한군데 모아놓은 것
//배열, 리스트, 함수..
//주소만 복사되어 들어온다

let obj = { //123주소 가리킴
    //123안에 있는 변수들
    name: 'ellie',
    age: 5,
};
console.log(obj.name)

let obj2 = obj //123주소 가리킴
console.log(obj2.name)

//복사된 값이 바뀌면 같이 변화됨
obj.name = 'james'
console.log('------')
console.log(obj.name) //james
console.log(obj2.name) //james

//const ; 변경불가
const obbj = {
    name: 'ellie',
    age: 5
}
//ref자체 바꾸는 것은 불가능
// obj = {
//     name: 'james',
//     age: 4
// }
//ref가 가리키고 있는 값을 바꾸는것은 가능
obbj.name = 'yeafla'
console.log(obbj.name)