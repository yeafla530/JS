//1. user this for Vanila js
'use strict'

// 2. Variable (변수)
// ES6 === JS
// let (added in ES6)
// 변수로 선언할 수 있는 것은 딱하나 let

let comment = 'ellie'
console.log(comment);
comment = 'hello';
console.log(comment)

//3. block scope
let globalName = 'global name';
{
    let name = 'ellie'
    console.log(name);
    name = 'hello';
    console.log(name)
    console.log(globalName)
}
console.log(name);
console.log(globalName);

//var (쓰지마!)
//선언하기 전에 값을 할당할 수 있음
// 그리고 그 값이 출력됨 (undefined)
//var hoisting : 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올리는 것
//var은 block scope를 철저히 무시함

{
    console.log(age)
    age = 4;
    var age;
}
console.log(age)

//3. constants
//선언함과 동시에 값을 절대 바꿀 수 없음
//let은 mutable(변경가능한) data
//const = immutable data

const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Imutable data types: primitive types, frozen objects (i.e. object.freeze())
//primitive type: 언어에서 사전 정의 되어 있는 데이터 타입으로 char, byte, int 등 일반 값 타입
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons"
//     -security(보안성)
//     -thread safety(다양한 thread들이 동시에 변수에 접근할 수 있는 것을 막아줌)
//     -reduce human mistakes(실수방지)

//4. Variable types
// primitive, single item: Number, string, boolean, null, undefined, symbol
// Object, box container
// function, first-class function
// function도 변수에 할당이 가능함
// 그렇기 때문에 인자로 전달이 되고 함수에서 return 타입으로도 function이 가능하다

//C언어 자료형
// int main() {
//     short a = 12 //2 bytes
//     int a = 12; //4 bytes
//     long b = 1234; //8bytes
//     float d = 1.2f // 4bytes
//     double e = 8.2; //16 bytes
//     return 0
// }

// js에서는 number만 있으면 끝!!!
let count = 12; //integer
let size = 1.2; // decimal number
console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)

//number - special numeric vlues: infinity, -infinity, NAN :Not a number 
const infinity = 1 / 0; // Infinity
const negativeInfinity = -1 / 0; //-Infinity
const nAn = 'not a number' / 2; // NaN
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));