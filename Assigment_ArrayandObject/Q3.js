// Use the Object.preventEatensions method to prevent any further additions of properties to the student object.
let student = {
  name: "Annesh",
  age: 23,
  grade: "A",
};

Object.preventExtensions(student);
student.address = "Bhubaneswar"; //

// b)Use the Object.preventEatensions method to prevent any further additions of properties to the student object.store the result in extensibleStatus variable
let extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property called set to 'Math'.
let teacher = {
  subject: "Math",
  address: "patia",
};
console.log(teacher);
// d) Use the Object.seal method to seal the teacher object preventing an additions or deletions of properties.
Object.seal(teacher);
teacher.age = 40;
delete teacher.address;
console.log(teacher);

// e)Use the Object.isSeal method to check if the teacher object is sealed. Store the result in a variable called sealedStatus.
let sealedStatus = Object.isSealed(teacher);

// f)Print the eatensibleStatus and sealed Status to the console.

console.log(extensibleStatus);
console.log(sealedStatus);
