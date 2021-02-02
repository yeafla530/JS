//기존에 존재하는 promise를 더 편하게 사용할 수 있게 해주는 api
//syntactic suger

//async & await
//clear style of using promise

//1. async
// 비동기 처리 x
// function fetchUser() {
//     //do network request in 10 secs...
//     return 'ellie';
// }

// promise
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         //do network request in 10 secs...
//         resolve('ellie');
//     })
// }

// async : 자동으로 promise로 바꿔줌
async function fetchUser() {
    //do network request in 10 secs...
    return 'ellie'
}

const user = fetchUser();
user.then(console.log)
//비동기적인 처리 하지 않으면 10초가 걸릴것임
console.log(user);


// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(1000);
    // throw 'error'
    return '🍎';
  }
  
  async function getBanana() {
    await delay(2000);
    return '🍌';
  }

//콜백 지옥과 비슷해져버림 ㅠㅠ 
// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} => ${banana}`)
//     })
// }

//비효율적
// async function pickFruits() {
//     try {
//         const apple = await getApple(); //1초
//         const banana = await getBanana(); //1초 순차적진행 => 비효율적
//     }
//     catch {
//         console.log('error')
//     }
//     return `${apple} => ${banana}`;
// }

//병렬적 기능 수행 but 더럽
async function pickFruits() {
    const applePromise = getApple(); //apple promise
    const bananaPromise = getBanana(); //banana promise
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} => ${banana}`
}

pickFruits().then(console.log)

// 3. useful Promise APIs
// all : 리스트 안의 모든 promise 병렬 수행
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '))
}
pickAllFruits().then(console.log)

//race : 가장먼저 처리되는 것 출력
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);