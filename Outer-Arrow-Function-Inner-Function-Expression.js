
// Case #4: OuterFunction = Arrow Function, InnerFunction = Function Expression
// Object with one method only

// In this case the object will return value when created.

const Student = () => {
 //const Student = function() {
 this.name = "Jammie Stampton";
 this.age = 21;
 console.log(this);
 //this.halo = () => {
   this.hello = function() {
   console.log(`Hello, my name is ${this.name}, I am ${this.age} years old. Nice to meet you.`);
   //console.log(this);
 }
 //return this.halo;
 return this.hello;
}

let student = Student();
student();

// output di console:
// "Hello, my name is Jammie Stampton, I am 21 years old. Nice to meet you."

// An alternative to this:

const Student1 = () => {
 this.name = "Jammie Stampton";
 this.age = 21;
 this.hello = function(){
   console.log(`Hello, my name is ${this.name}, I am ${this.age} years old. Nice to meet you.`);
 }
 return this.hello();
}

Student1();

// output di console:
// "Hello, my name is Jammie Stampton, I am 21 years old. Nice to meet you."






