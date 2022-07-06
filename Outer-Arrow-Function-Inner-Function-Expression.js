
// Case #4: OuterFunction = Arrow Function, InnerFunction = Function Expression

// In this case the object will return nothing when created. This case is not correct way in creating object.

const Student = () => {
 //const TimBola = function() {
 this.name = "Jammie Stampton";
 this.age = 21;
 console.log(this);
 //this.halo = () => {
   function hello() {
   console.log(`Hello, my name is ${this.name}, I am ${this.age} years old. Nice to meet you.`);
   console.log(this);
 }
 //return this.halo;
 return hello;
}

let student = Student();
student();

// output di console:
// Nothing, it is because "this" tidak dikenal pada arrow function.






