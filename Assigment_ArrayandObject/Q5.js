const student = {
  name: "Annesh",
  age: 24,
  major: "Computer Science ",
  GPA: 3.8,
  isEnrolled: true,
};
function displayStuentInfo(obj) {
  for (let key in obj) {
    console.log(`property :${key} , Value:${obj[key]}`);
  }
}
displayStuentInfo(student);
