
// 1. Object by Function Expression
// This and arrow function can be used together in this object

const Mahasiswa = function () {
 this.nama = "Bima Sakti";
 this.umur = 23;
 this.sayHello = () => {
   console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  console.log("Hai");
 }
}

const bimasakti = new Mahasiswa();

//open console, type:
// bimasakti.nama;
// bimasakti.sayHello;
//output:
// Bima Sakti
// Halo, nama saya Bima Sakti, dan saya 23 tahun.

const Student = function(name, age){
 this.name = name;
 this.age = age;
 this.hello = () => {
  return `Hello my name is ${this.name}, I am ${this.age} years old.` 
 }  
}

let john = new Student('John Smith', 24);

console.log(john.hello());
// output: Hello my name is John Smith, I am 24 years old.

// 2. Object Literal
// This and arrow function can not be used together in object literal

const mhs1 = {
 nama: "Baladewa",
 umur: 24,
 sayHello: function(){  // arrow function tidak bisa digunakan pada object literal
  console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
}
}

// open console, lalu ketik:
// mhs1.nama
// mhs1.umur
// mhs1.sayHello()
//output di console:
// Baladewa
// 24
// Halo, nama saya Baladewa, dan saya 24 tahun.

const mhs2a = {
 nama: "Belang",
 umur: 21,
 sayHello: () => {  
  console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  console.log(this); // di concole terlihat this me-refer pada global scope (windows).
}
}

// jika digunakan arrow function, 
// ketik di console: mhs2a.sayHello()
// maka outputnya:
// Halo, nama saya undefined, dan saya undefined tahun.
// karena this pada arrow function di object literal akan me-refer pada variable global, bukan pada function scope nya.

// an alternative of the above:

const mhs2b = {
 nama: "Belang",
 umur: 21,
 sayHello: () => {  
  console.log(`Halo, nama saya ${mhs2.nama}, dan saya ${mhs2.umur} tahun.`);
}
}

mhs2b.sayHello();

// output:
// "Halo, nama saya Belang, dan saya 21 tahun."






