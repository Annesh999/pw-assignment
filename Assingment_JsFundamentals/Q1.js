// Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.
function outerFunction(val1){

   return function innerFunction(){
     let val2=10;
     return val1+val2;
    }
}
let closuer=outerFunction(80);
console.log(ans())
// outerFunction returns innerFunction, creating a closure.
// Even after outerFunction finishes executing, innerFunction still retains access to outerParam and outerVariable when invoked later.