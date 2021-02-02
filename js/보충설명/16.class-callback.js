class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        //callback함수 등록됨
        this.callback = runEveryFiveTimes;
    }

    //호출할때마다 callback함수 넣어야 돼서 비효율적
    // increase(runIfTimes) {
    increase() {
        this.counter++;
        console.log(this.counter);
        
        //callback함수를 전달함
        //callback이 전달이 안됐을 때를 대비
        if(this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

//new 연산자 이용해서 클래스 만들게 되면 
//constructor가 실행됨
// const coolCounter = new Counter();

//생성자에 우리가 원하는 콜백함수 넣어줌
//class재사용 높아짐
const coolCounter = new Counter();
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);


//우리가 컨트롤 할 수 있음
function printSomething(num) {
    console.log(`${num} yo!`)
}

function alertNum(num) {
    alert(`${num}`);
}
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();





// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
