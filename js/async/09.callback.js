"use strict";

//Synchronous callback : 즉각적으로 실행
//function은 hoisting되어 맨 위에 있다고 생각
function printImmediately(print) {
  print();
}

//Asynchronous callback : 언제 실행될지 예측불가
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

//JavaScript is synchronous (동기적)
//Execute the code block by order after hoisting.
//hoisting : var, function declaration

//1, 3, 2
console.log("1"); //동기

//브라우저 API
//지정 시간 지나면 지정한 콜백함수를 불러옴

//callback: 나중에 다시 불러줄 함수
setTimeout(() => console.log(2), 1000); //비동기
console.log("3"); //동기
printImmediately(() => console.log("hello")); //동기
printWithDelay(() => console.log("async callback"), 2000); //비동기

/*콜백지옥*/
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id); //role을 받아옴
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id, 
  password, 
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Helo ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);

/*
콜백지옥 문제점 
1. 가독성이 떨어짐
2. 디버깅 해야하는 경우에도 어렵
3. 유지보수도 어렵
4. promise와 async와 await에서 알아보자
*/