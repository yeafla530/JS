//1. use vanila js
'use strict'

//2. 변수
//변수로 선언할 수 있는 것은 딱하나 let
let comment = 'yeafla530'
console.log(comment)
comment = 'hello'
console.log(comment)

//3. block scope
let globalName = 'global name';
{
    let name = 'yeafla'
    console.log(name);
    name = 'hello'
    console.log(name)
    console.log(globalName)
}
console.log(name);
console.log('globalName', globalName)

//3. constants
//선언함과 동시에 값을 절대 바꿀 수 없음
//let은 mutable data
//const = immutable data
//favor immutable data type always for a few reasons

const daysInWeek = 7;
const maxNumber = 5;

//4. variable type

let count = 12;
let size = 1.2;
console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)


const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

//bigInt
const bigInt = 1234567890123456789012345678901234567890n; 
console.log(bigInt)

//string
const char = 'c';
const brendan = 'brendan'
const greeting = 'hello' + brendan
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type:${typeof helloBob}`)
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

//boolean
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type:${typeof canRead}`)
console.log(`value ${test}, type: ${typeof test}`)

//null
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`)

//undefined
let x;
console.log(`value:${x}, type:${typeof x}`)

//symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2)
const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2)
console.log(`value: ${symbol1.description}, type ${typeof symbol1}`)

//object real-life object, data structure
const yeafla = { name:'yeafla', age: 20 }
yeafla.age = 25

let text = 'gell'
console.log(text.charAt(0))
console.log(`value: ${text}, type: ${typeof text}`)
text = 1
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2'
console.log(`value: ${text}, type:${typeof text}`)
console.log(text.charAt(0));