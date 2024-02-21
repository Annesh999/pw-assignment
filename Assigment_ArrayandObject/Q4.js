let studentDatabase = [];
function createStudent(Id, Fname, Lname, Age, Grade) {
  let user = {};
  user.id = Id;
  user.firstName = Fname;
  user.lastName = Lname;
  user.age = Age;
  user.grade = Grade;
  studentDatabase.push(user);
}

let student1 = createStudent(1, "Annesh", "Nayak", 24, "A");
let student2 = createStudent(2, "John", "Doe", 54, "C");
let student3 = createStudent(3, "Bob", "Johnson", 34, "F");
///////////////////////////////////////////////////////////////////////////////////
function updateStudentInfo(Id, Fname, Lname, Age, Grade) {
  if (studentDatabase.length) {
    studentDatabase.forEach((item) => {
      if (Id === item.id) {
        item.firstName = Fname;
        item.lastName = Lname;
        item.age = Age;
        item.grade = Grade;
      }
    });
  }
}
updateStudentInfo(3, "Virat", "Kohli", 35, "A");
////////////////////////////////////////////////////////////////////////////
// console.log(studentDatabase);

function deleteStudent(Id) {
  if (Id < studentDatabase.length) {
    for (let item in studentDatabase) {
      if (studentDatabase[item].id === Id) {
        studentDatabase.splice(item, 1);
      }
    }
  } else {
    console.log("Enter A valid Id of student");
  }
}
deleteStudent(10);
console.log(studentDatabase);

/////////////////////////////////////////////////////
// list of all student
function listOfAllStudent() {
  studentDatabase.forEach((item) => {
    console.log(
      `ID:${item.id}   Name:${item.firstName} ${item.lastName}   Age:${item.age}   Grade:${item.grade}`
    );
  });
}
listOfAllStudent();

///////////////////////////////////////////////////////////////
// finding students by Grade
function findingStudentByGrade(Grade) {
  if (Grade.charCodeAt(0) >= 65) {
    Grade = String.fromCharCode(Grade.charCodeAt(0) + 32);
  }
  studentDatabase.forEach((item) => {
    if (item.grade === Grade) {
      console.log(
        "Name:",
        item.firstName,
        " ",
        item.lastName,
        "Grade:",
        item.grade
      );
    }
  });
}
findingStudentByGrade("B");
///////////////////////////////////////////
// calulate average age of all students
let sumAge = studentDatabase
  .map((elem) => elem.age)
  .reduce((prev, curr) => {
    return prev + curr;
  }, 0);
let averageAge = sumAge / studentDatabase.length;
console.log(averageAge);
