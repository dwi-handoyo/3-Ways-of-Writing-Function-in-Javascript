
// CASE #3: OuterFunction = arrow function, InnerFunction = arrow function

// In this case the object will return nothing when created. This case is bad way in creating object.

const Student = () => {
 this.name = "Mike Lewis";
 this.age = 24;
 console.log(this);
 this.sayHello = () => {
   console.log(`Hi, my name is ${this.name} I am ${this.age} years old. Nice to meet you.`);
   console.log(this);
 }
 return this.sayHello;
}

let student = Student();
student();

// output di console:
// Nothing, it is because "this" tidak dikenal pada arrow function.


