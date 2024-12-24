// Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

function findCharacterClasses(str) {
    const digitPattern = /\d+/g;
    const uppercasePattern = /[A-Z]/g;
    const lowercasePattern = /[a-z]/g;
    const specialCharPattern = /[^a-zA-Z0-9]/g;

    return {
        digits: str.match(digitPattern) || [],
        uppercase: str.match(uppercasePattern) || [],
        lowercase: str.match(lowercasePattern) || [],
        specialChars: str.match(specialCharPattern) || []
    };
}

const test = "Hello World! 123 @#+";
console.log(findCharacterClasses(test));