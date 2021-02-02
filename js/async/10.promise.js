//Promise
//비동기를 간편하게 처리할 수 있도록 도와주는 object
//정해진 장시간의 기능 수행 후 성공의 메세지와 함께 처리된 결과값 전달
//예상치 못한 문제 발생하면 error를 반환

'use strict'

//Promise is a JS object for asynchronous operation
//1. state: pending(보류) -> fulfilled or rejected
//2. producer와 cunsumer 이해

//1. Producer
//promise가 만들어지는 순간 자동적으로 executor가 동작
const promise = new Promise((resolve, reject) => { //execute(실행)함수 
    //doing some heavy work (network, read files => 비동기 처리)
    console.log('doing something...')
    setTimeout(() => {
        resolve('ellie');
        reject(new Error('no network'))
    }, 2000)
});

//2. Consumer: then, catch, finally를 사용해 값을 받아옴
//value안엔 resolve된 값이 들어옴
promise
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
    })
    //무조건 마지막에 실행되는 함수
    .finally(() => {
        console.log('finally')
    })

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
//then은 값을 바로 전달해도 되고 프로미스를 전달해도 됨
.then(num => num * 2) //2
.then(num => num * 3) //6
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000) //5
    })
})
.then(num => console.log(num)) //5

//4 . Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000)
    });

const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🐣`)), 1000)
    })

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000)
    })

//value를 다른 함수를 호출해서 바로 불러오는 경우는 함수만 작성해도됨
getHen()
// 함수에 보내는 인자가 같으면 생략가능
// .then(hen => getEgg(hen))
.then(getEgg)
.catch(error => {
    return '🌭'
})
.then(cook)
.then(console.log) //🌭 => 🍳
.catch(console.log) 