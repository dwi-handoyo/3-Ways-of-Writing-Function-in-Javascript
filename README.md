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
 
 c. "This" in Arrow Function

    OuterFunction = function expression, InnerFunction = function expression
   
    OuterFunction = function expression, InnerFunction = Arrow Function (This is the correct one / Ini yang benar)
   
    OuterFunction = Arrow Function, InnerFunction = Arrow Function
   
    OuterFunction = Arrow Function, InnerFunction = Function Expression












