
// CASE #2: OuterFunction = function expression, InnerFunction = arrow function

// In this case the object will return correct value when created. Case #2 is a good implementation.

const Student = function() {
 this.name = "Jason Timberlake";
 this.age = 22;
 console.log(this);
 this.sayHello = () => {
  console.log(`Hello, I am a student, my name is ${this.name} I am ${this.age} years old.`);
  console.log(this);
 }
 return this.sayHello;
}

let student = new Student();
student();

// output di console:
// {age: 22, name: "Jason Timberlake"}
// Halo, saya pelajar, nama saya Baladewa umur 15 tahun.
// Siswa {nama: 'Baladewa', umur: 15, apaKabar: ƒ}

