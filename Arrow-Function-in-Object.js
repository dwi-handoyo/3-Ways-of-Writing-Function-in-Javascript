
// Function/method inside objects

// 1. Function Declaration
// This is not OK

const bad = { 
  name:'NAME', 
  z : function() { 
    function x() { console.log(this.name); }; 
    x();
  } 
};
bad.z() // prints 'undefined'

// 2. Arrow Function
// This is OK

const bad2good = { 
  name:'NAME', 
  z : function() { 
    let x = () => { console.log(this.name); }; 
    x() 
  } 
};
bad2good.z() // prints 'NAME'

// 3. Function Decalaration with .bind
// This is OK

const good = { 
  name:'NAME', 
  z : function() { 
    function x() { console.log(this.name); }; 
    x=x.bind(this);
    x();
  } 
};
good.z() // prints 'NAME'
