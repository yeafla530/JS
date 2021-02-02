// 왜쓸까? 
// flexible === dangerous
// added ECMAScript 5에 선언되어있으므로 
// 미친 유동성 사라짐

'use strict'

console.log('hello world')

//오류: Uncaught ReferenceError: a is not defined
//'use scrict안쓰면 오류 안뜸'
// a = 1

//밑에가 정상
// let a = 5
// console.log(a)