// Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

function fact(num){
    if(num<0){
        console.log("Negative not allowed");
        return;
    }
if(num==1){
    return 1;
}
  let ans=num*fact(num-1);
  return ans;
}
console.log(fact(-4));