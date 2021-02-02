'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj) API (obj를 string화 해서 JSON으로 )
// 오버로딩(OverLoading) : 밑의 경우처럼 함수 이름은 같지만 어떤 파라미터를 전달하는 지가 다른 경우
// stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
// stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;

// string
let json = JSON.stringify(true);
console.log(json) //true

// Array
json = JSON.stringify(['apple', 'banana'])
console.log(json) //["apple", "banana"] 배열처럼 보이게 ' => "

// Object
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol("id"), //js에만 있는 특별한 데이터는 제외
    jump: function jump() { 
        console.log( this.name + ' can jump!');
    },//함수는 obj에 있는 데이터가 아니기 때문에 제외
}

json = JSON.stringify(rabbit)
console.log(json) 
//{"name":"tori","color":"white","size":null,"birthDate":"2020-12-29T03:13:34.499Z"}
//json 규칙 : key값도 ""로 감싸줌 

// [] 로 뽑아내기 
json = JSON.stringify(rabbit, ["name", "color"]) 
console.log(json) // {"name":"tori","color":"white"}

//세밀하게 통제하고 싶을 때 callback함수 사용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value; //key: name, value: tori, key: color, value: white ...
    return key === 'name' ? 'ellie' : value; 
}) 
console.log(json)  //{"name":"ellie","color":"white","size":null,"birthDate":"2020-12-29T03:18:28.621Z"}


// 2. JSON to Object
// parse(json) API (JSON으로 변화된 string을 parsing해서 obj로)
// console.clear();
json = JSON.stringify(rabbit); //{"name":"ellie","color":"white","size":null,"birthDate":"2020-12-29T03:21:18.867Z"}
let obj = JSON.parse(json);
console.log(obj); // {name: "tori", color: "white", size: null, birthDate: "2020-12-29T03:21:08.074Z"}
rabbit.jump(); //can jump!
// obj를 JSON으로 바꾸는 과정에서 함수는 빠지고 함수가 빠져있는 상태에서 obj로 바꾸고 jump를 실행사려니 에러 발생
// obj.jump() // error

//rabbit에서는 Date라는 함수 => json으로 변환하면서 string으로 바뀜 
console.log(rabbit.birthDate.getDate()) //29 API사용가능
console.log(obj.birthDate) //string : "2020-12-29T03:33:48.044Z"
// console.log(obj.birthDate.getDate()) //error API사용 불가

//위 에러를 처리하기 위해 콜백함수 사용해서 세밀히 변경 가능 
obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
})

console.log(obj.birthDate) //Tue Dec 29 2020 12:49:16 GMT+0900 (대한민국 표준시) 
console.log(obj.birthDate.getDate()) //29