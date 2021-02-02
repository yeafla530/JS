'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}
//object생성
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User { //firstName, lastName, _age 세개의 fields
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;  //this.age는 get을 =age는 set을 가리킴
	}

	get age() {
		return this._age;
	}
	
	set age(value) {
		//setter안에서 전달된 value를 this.age에 할당할 때 메모리의 값을
		//update하는 것이 아니라 setter의 age를 호출하게 됨
		//this.age = value;
	
		//1번방법
		//if (value < 0) {
		//	throw Error('age can not be negative');
		//}
		
		//2번방법
		this._age = value < 0 ? 0 : value;
	}
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age) //-1


// 3. Fields (public, private)
//많이 안쓰임 있다고만 알아두기
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance (상속과 다양성)
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
// interface Object {
//   /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
//   constructor: Function;

//   /** Returns a string representation of an object. */
//   toString(): string;

//   /** Returns a date converted to a string using the current locale. */
//   toLocaleString(): string;

//   /** Returns the primitive value of the specified object. */
//   valueOf(): Object;

//   /**
//    * Determines whether an object has a property with the specified name.
//    * @param v A property name.
//    */
//   hasOwnProperty(v: PropertyKey): boolean;

//   /**
//    * Determines whether an object exists in another object's prototype chain.
//    * @param v Another object whose prototype chain is to be checked.
//    */
//   isPrototypeOf(v: Object): boolean;

//   /**
//    * Determines whether a specified property is enumerable.
//    * @param v A property name.
//    */
//   propertyIsEnumerable(v: PropertyKey): boolean;
// }



let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);