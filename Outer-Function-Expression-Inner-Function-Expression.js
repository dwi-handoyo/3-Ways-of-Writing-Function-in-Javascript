
// CASE #1: OuterFunction = function expression, InnerFunction = function expression

// In this case the object will return undefined value when created. Case #1 not the proper implementation.

const Student = function() {
 this.name = "Jack Brown";
 this.age = 23;
 console.log(this);
  this.sayHello = function() {
  console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
  console.log("Hai");
  console.log(this);
 }
 return this.sayHello;
}

let student = new Student();
student();

// output di console:
// {name: 'Jack Brown', age: 23}
// Hello, my name is undefined, and I am undefined years old.
// Hai
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
