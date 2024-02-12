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

