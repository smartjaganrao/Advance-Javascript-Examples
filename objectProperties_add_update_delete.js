// JavaScript Object Properties
// Javascript Object is collection of unordered Properties
// Values associated with javascript object are called it's properties
// javascript properties can be Acess,added, updated & Deleted. but Excluding Read Only Object.

// 1. Object Literal
var student = {
    name : "Jagan Rao",
    age: 28,
    mobile: 8122140332,
    company: "Capgemini"
}


// Update Method
console.log(student);
student.age = 40; // Update the age in property
console.log(student);

// Access the property by variable Method
var age =  student.age;
console.log(age);

// Access the property by Variable String Method
var company = "company";
console.log(student[company]);