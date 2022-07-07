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

Summary of Guideline in Creating Functions

a. Object Function Expression + this + Method Array Function -> Result: OK (similar to item h)

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/This-and-Arrow-Function-in-Objects.js (case #1)

b. Object Literal + Method Function Expression -> Result: OK

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/This-and-Arrow-Function-in-Objects.js (case #2a)

c. Object Literal + Method Arrow Function -> Result: Undefined 

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/This-and-Arrow-Function-in-Objects.js (case #2b)

d. Object Literal + Method Function Declaration inside function -> Result: Undefined

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Arrow-Function-in-Object.js (case #1)

e. Object Literal + Method Arrow Function inside function -> Result: OK

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Arrow-Function-in-Object.js (case #2)

f. Object Literal + Method Function Declaration inside function with .bind(this) -> Result: OK
 
   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Arrow-Function-in-Object.js (case #3)

g. Outer Function: Function Expression + this + Inner Function: Function Expression -> Result: Undefined

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Outer-Function-Expression-Inner-Function-Expression.js

h. Outer Function: Function Expression + this + Inner Function: Arrow Function -> Result: OK (similar to item a)

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Outer-Function-Expression-Inner-Arrow-Function.js

i. Outer Function: Arrow Function + this + Inner Function: Arrow Function -> Result: Nothing (this is not recognized in arrow function (outer))

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Outer-Arrow_funtion-Inner-Arrow-Function.js

j. Outer Function: Arrow Expression + this + Inner Function: Function Expression -> Result: Nothing (this is not recognized in arrow function (outer))

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Outer-Arrow-Function-Inner-Function-Expression.js

k. Arrow Function in map method -> Result: OK

   * https://github.com/dwi-handoyo/3-Ways-of-Writing-Function-in-Javascript/blob/main/Arrow-Function-and-Map-Method-Example.js













