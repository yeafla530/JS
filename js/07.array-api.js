//01. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange']
    const result = fruits.join(','); //원하는 구분자
    console.log(result);
}

//02. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒'
    const result = fruits.split(', ') //나누는 기준
    const result2 = fruits.split(',', 2) //limit 2 설정 
    console.log(result)
    console.log(result2)
}

//03 make this array look like this : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5]
    const result = array.reverse()
    console.log(result)
}

//04.make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5]
    //slice : 원하는 부분만 return해줌
    const result = array.slice(2) //start idx, end idx 
    console.log(result) 
    console.log(array) 
    // splice 사용하면 array에도 영향이감
    // const result = array.splice(2) //어디부터 삭제할지 
    // console.log(result) // [3, 4, 5]
    // console.log(array) // [1, 2]
}

class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
//05. find a student with the score 90
{
    //find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    //find는 callback함수 사용, 조건에 맞는 가장 처음것 return
    // const result = students.find(function(student, index) {
    //     console.log(student, index)
    //     return student.score === 90;
    // })   

    //arrow function
    //callback 함수로 전달되는 인자는 알아보기 쉽도록 (value가 아닌 student로)
    const result = students.find((student, index) => {
        console.log('student',student, 'index', index) //    new Student('A', 29, true, 45), new Student('B', 28, false, 80), new Student('C', 30, true, 90),
        return student.score === 90; //90점 나오면 그 아래 data실행 x
    })   
    //arrow function2
    const result2 = students.find(student => student.score === 90)
    console.log(result) // new Student('C', 30, true, 90)
    console.log(result2) // new Student('C', 30, true, 90)

}

//06. make an array of enrolled students
{
    // filter는 조건에 맞는 것 전부 return
    const result = students.filter(student => student.enrolled)
    console.log(result)
    // [ new Student('A', 29, true, 45), new Student('C', 30, true, 90), new Student('E', 18, true, 88)]
}

//07. make an array containing only the students' scores
//result should be : [45, 80, 90, 66, 88]
 {
     //map : 배열안에 들어있는 각각의 요소를 다른것으로 변환해주는것 
     //콜백함수에서 가공되어진 값들을 return
     const result = students.map(student => student.score)
     console.log(result)
 }

 //08. check if there is a student with the score lower than 50
{   
    //some : 배열의 요소 중에서 하나라도 true면 return true됨 
    const result = students.some(student => student.score < 50);
    console.log(result) //true

    //every : 모든 요소들이 이 조건을 충족해야 true return됨
    //50점보다 
    const result2 = students.every(student => student.score < 50);
    console.log(result2) //false
}

//09. compute(계산) students' average score
{   
    //The return value of the callback function is the accumulated(축적된) result
    //reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    //reduce : 값을 누적할 때 사용
    //prev는 callback함수 return값 전달받음
    //curr은 배열의 item 순차적으로 전달받음

    //기본적으로 5바퀴 돌음
    //1단계. prev와 curr출력해보기 : prev 두번째 부터 undefined로 나옴
    // const result = students.reduce((prev, curr) => {
    //     //두번째 횟수부터 prev 출력안됨
    //     console.log('a----------')
    //     console.log(prev);
    //     console.log('b----------')
    //     console.log(curr);
    // }) 

    //2단계. curr return : prev에 그 전 curr값이 들어감
    // const result = students.reduce((prev, curr) => {
    //     //두번째 횟수부터 prev 출력안됨
    //     console.log('a----------')
    //     console.log(prev);
    //     console.log('b----------')
    //     console.log(curr);
    //     return curr; //return 된 curr값이 그 다음 prev에 들어감
    // }) 

    //3단계. prev초기값 0으로 세팅 => curr값이 순차적으로 나오게됨 ABCDE
    // const result = students.reduce((prev, curr) => {
    //     //두번째 횟수부터 prev 출력안됨
    //     console.log('a----------')
    //     console.log(prev);
    //     console.log('b----------')
    //     console.log(curr);
    //     return curr;
    // }, 0) //prev의 초기값이 0으로 설정됨
    // console.log(result);

    //4단계. 학생들 점수 축적
    // const result = students.reduce((prev, curr) => {
    //     console.log('a----------')
    //     console.log(prev);
    //     console.log('b----------')
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0)
    // console.log(result)

    //5단계. arrow function
    const result = students.reduce((prev, curr) => prev + curr.score, 0)
    console.log(result / students.length);

    //cf. reduceRight : 배열의 제일 마지막부터 시작하는 것
    const result = students.reduceRight((prev, curr) => {
        console.log('a----------')
        console.log(prev);
        console.log('b----------')
        console.log(curr);
        return prev + curr.score;
    }, 0)
    console.log(result) //369
}

//10. make a string containing all the scores
//result should be: '45, 80, 90, 66, 88'
//여러개 묶어서 사용하
{   
    //번외 50점 이상인 학생들만 string으로 출력
    const result = students
        .map(student => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result); //45, 80, 90, 66, 88
} 

//Bonus! do Q10 sorted in ascending order
//result should be: '45, 66, 80, 88, 90'
//sort : a negative value if first argument is less than second argument, zero if they're equal and a positive
{
    const result = students
        .map(student => student.score)
        .sort((a, b) => b - a) //내림차순 정렬 그냥 sort()만하게되면 113이 13보다 작게나옴..
        .join()
    console.log(result) //90,88,80,66,45

}