
// 1. Without Arrow Function

let buah = ['apel','jambu','nanas'];
                            	
let jumlahHuruf = buah.map(jmlHuruf);
                            	
 function jmlHuruf(nama){
  return nama.length;
 }
                       	
console.log(jumlahHuruf); // output: [4, 5, 5]
  
// 2. With Arrow Function

let jumlahHuruf1 = buah.map(nama => { return nama.length });

console.log(jumlahHuruf1); // output: [4, 5, 5]

let jumlahHuruf2 = buah.map(nama => ({buah: nama, jmlHuruf: nama.length}));
      
console.log(jumlahHuruf2); 

// output:

// [{
//  buah: "apel",
//  jmlHuruf: 4
// }, {
//   buah: "jambu",
//   jmlHuruf: 5
// }, {
//  buah: "nanas",
//  jmlHuruf: 5
// }]
