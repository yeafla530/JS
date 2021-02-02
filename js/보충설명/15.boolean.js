//false: 0 ,-0 , '', null, undefined
// true: -1, 'hello', 'false', []



let num; //undefined

if(true) {
    console.log('true')
} else {
    console.log('false!')
}

//false && true
num && console.log(num);

//없다면 name에 접근하도록
let obj = {
    name: 'ellie',
    age: 32
};

//아래 &&랑 같음
if (obj) {
    console.log(obj.name)
}

//&&가 false면 뒤에 볼것도 없이 넘어감 
//obj있는 경우에만 name확인해봐
obj && console.log(obj.name)