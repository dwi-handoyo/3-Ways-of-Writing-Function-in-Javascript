# 3-Ways-of-Writing-Function-in-Javascript

3-Ways of Writing Function in Javascript

// 1. Function Declaration
function tampilPesan1(nama) {
 alert('Halo' + nama);
}
tampilPesan1('Godam');
//akan pop up alert:
//Halo Godam

// 2. Function Expression
let tampilPesan2 = function(nama) {
 alert('Halo' + nama);
}
tampilPesan2('Palu');
//akan pop up alert:
//Halo Palu

// 3. Arrow Function
// a. Multilines
const tampilNama3 = (nama, waktu) => {
 return `Selamat ${waktu}, ${nama}`;
} 

console.log(tampilNama3("Gada", "Malam"));

//output di console:
//Selamat Malam, Gada

// b. Single Line
//Untuk function dengan satu parameter dan satu baris return, bisa dibuat simple, parameter tidak perlu (), "return" juga tidak perlu ditulis:

const tampilNama4 = nama => `Halo ${nama}`;

console.log(tampilNama4("Semar"));

//output di console:
//Halo Semar

//Untuk function tanpa parameter harus digunakan ()

const halo = () => `Hello World!`;

console.log(halo());

//output in console:
// Selamat Malam, Gada
// 43 Halo Semar
// Hello World!









