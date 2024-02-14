// genaral function 0. Named Functions:


// let x = 5;
// let y = 4;
// function sum(a, b){
//     return a+b;
// }
// console.log(sum(x,y));

// 1. arrow function 

// const addVal = (a,b) => a-b;

// console.log(addVal(3,"4"));

// const hi = () => console.log("Hi");
// hi();
// ******************. Function Expressions:*******************
// const sayHello = function(name) {
//     return "Hi, " + name + "!";
//   };
   
//   console.log(sayHello("Bob"));  

// **************2. Anonymous function**************
// const buttonClickHandler = function() {
//     console.log("Button clicked!");
//   };
  
//   button.addEventListener("click", buttonClickHandler);

// **************3. Recursive function:**************

// function factorial(n){
//     if(n===0){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
//     }
        
// }

// console.log(factorial(5));

// **************4. Generator Functions:*************
// Produce sequences of values using the yield keyword.
// Useful for creating iterators and asynchronous operations.

// function* countUp() {
//     let i = 0;
//     while (true) {
//       yield i++;
//     }
//   }
  
//   const counter = countUp();
//   console.log(counter.next().value);  
//   console.log(counter.next().value); 

// ***************5. Async Functions:***********************
/* 
Use the 'async' keyword to declare functions that use 'await' for asynchronous operations.
Handle Promises more seamlessly without nested .then() callbacks.
*/

// async function fetchData() {
//     const response = await fetch("https://example.com/data");
//     const data = await response.json();
//     return data;
//   }
  
//   fetchData().then(data => console.log(data)); //output: 1

// ***************5. Constructor Functions***********************
/* 
Used to create objects with a specific prototype and associated properties and methods.
Invoked using the new keyword.
*/

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//       console.log("Hello, my name is " + this.name + "!");
//     };
//   }
  
//   const person1 = new Person("Alice", 30);
//   person1.greet(); // Output: Hello, my name is Alice!

// ***************6. Callback Functions***********************
/* 
Functions passed as arguments to other functions to be executed later.
Common in asynchronous programming and event handling.
*/

// setTimeout(function() {
//     console.log("This message will appear after 2 seconds.");
//   }, 2000);

// ****************9. IIFE (Immediately-Invoked Function Expression):********************
/*
Function expression wrapped in parentheses and followed by execution operators () to call it immediately.
Useful for creating private variables and preventing variables from polluting the global scope.
 */

// (function() {
//     const privateVariable = "This is a private variable!";
//     console.log(privateVariable);
//   })();
  
  // console.log(privateVariable); // Error: privateVariable is not defined

//   *****************10. Method Functions:************
/*
Functions defined as properties of objects.
Can access the object's properties and methods using this keyword.
*/

// const person = {
//     name: "Bob",
//     greet: function() {
//       console.log("Hello, I'm " + this.name + ".");
//     }
//   };
  
//   person.greet(); // Output: Hello, I'm Bob.

// *****************JS Hosisting***************
/* 
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that regardless of where variables and functions are declared within a scope, they are treated as if they are declared at the top of the scope.

However, it's important to note that only the declarations are hoisted, not the initializations or assignments. Let me illustrate with some examples:
*/

// console.log(x); // undefined
// var x = 5;  

/* In the above example, even though we're trying to log the value of x before it's assigned, we won't get an error. This is because variable declarations (var x) are hoisted to the top of the scope, but the initialization (= 5) remains where it is. So, when console.log(x) is executed, x exists but has the value undefined.

Similarly, function declarations are hoisted as well:
*/
// foo(); // "Hello, world!"

// function foo() {
//   console.log("Hello, world!");
// }

/* 

In this example, the function foo() is called before its actual declaration, but it still works fine because the function declaration is hoisted to the top of the scope.

However, function expressions are not hoisted in the same way as function declarations:
*/
// bar(); // TypeError: bar is not a function

// var bar = function() {
//   console.log("Hi there!");
// };