# 3-Ways-of-Writing-Function-in-Javascript

3-Ways of Writing Function in Javascript

1. Function Declaration

    function popup1(name) {
      
      alert('Halo' + ' ' + name);
    
    }
    
    popup1('John');

2. Function Expression

    let popup2 = function(name) {
    
     alert('Halo' + ' ' + name);
    
    }
    
    popup2('John');

3. Arrow Function

 a. Multilines Arrow Function

    const example1 = (name, time) => {
      return `Good ${time}, ${name}`;
    } 

    console.log(example1("John", "Night"));

 b. Single Line Arrow Function

   Function with only one parameter and one line of return can be simplified. No need parantheses () for parameter, and no "return" to be stated.

   Untuk function dengan satu parameter dan satu baris return, bisa dibuat simple, parameter tidak perlu (), "return" juga tidak perlu ditulis:

    const example2 = name => `Halo ${name}`;

    console.log(example2("John"));

   Function without parameter shall use ()
   
   Untuk function tanpa parameter harus digunakan ()

    const halo = () => `Hello World!`;

    console.log(halo());
 
 c. "this" in Arrow Function
    
    Application of "this" with functions:
    
    * Case #1: OuterFunction = function expression, InnerFunction = function expression
      
      In this case the function will return undefined value when created. Case #1 not the correct implementation. 
      
      https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Outer-Function-Expression-Inner-Function-Expression.js
      
    * Case #2: OuterFunction = function expression, InnerFunction = Arrow Function (This is the correct one / Ini yang benar)
   
      In this case the function will return correct value when called. Case #2 is a good implementation.
   
      https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Outer-Function-Expression-Inner-Arrow-Function.js
   
    * Case #3: OuterFunction = Arrow Function, InnerFunction = Arrow Function
   
      In this case the function will return nothing when called. "this" is not applicable in arrow function. Case #3 is not correct way in creating object.
  
      https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Outer-Arrow_funtion-Inner-Arrow-Function.js
  
    * Case #4: OuterFunction = Arrow Function, InnerFunction = Function Expression

      In this case the function will return nothing when called. "this" is not applicable in arrow function. Case #4 is not correct way in creating object.
    
      https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Outer-Arrow-Function-Inner-Function-Expression.js










