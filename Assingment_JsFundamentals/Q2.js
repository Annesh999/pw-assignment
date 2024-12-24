// Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.

function regexMatch(pattern, str) {
   const reg= RegExp(pattern);
   return reg.test(str)
}


console.log(regexMatch("hello", "hello world"));  
console.log(regexMatch("\d+", "There are 42 apples"));  
console.log(regexMatch("apple", "There are oranges"));  
console.log(regexMatch("^start", "start of the line"));  
console.log(regexMatch("end$", "line ends here")); 
