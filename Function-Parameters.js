
// Parameters in Functions

// 1. Function with 2 Parameters

function sum(a, b){
 return a+b;
}

let sum2 = (a, b) => a + b; // without curly bracket, everything after arrow will be returned

console.log(sum(3, 5)); // result: 8

// 2. Function with 1 Parameter

function isPositive(number){
 return number >= 0;
}

let isPositive2 = number => number >= 0;

console.log(isPositive2(3)); // result: true

// 3. Function with No Parameter

function randomNumber(){
 return Math.random()
}

let randomNumber2 = () => Math.random();

console.log(randomNumber2()); // result: a random number between 0 to 1

// 4. Anonymous Function
document.addEventListener('click', function() {
  console.log('Click');
});

document.addEventListener('click', () => console.log('Click'));

// open console, click on the html page, the output:
// Click
// Click



