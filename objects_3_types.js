// three ways to create Javascript objects

// What is javascript Object
// Collection of Unordered List

// Create JS Object in there ways 
// 1. Object Literal
// 2. New Keyword used to Create Objects
// 3. Object Construtor to create Objects

// 1. Create Object using New Object with Variable Name:
var newstudent = new Object(); // Method to create JS Objects using New Keyword

newstudent.name = "JagadeeswaraRao";
newstudent.age = 30;
newstudent.mobile = 8122140332;
newstudent.company = "Microsoft";
console.log("Name:" +newstudent.name+ " Age:" +newstudent.age + " Mobile:" +newstudent.mobile + " Company:" +newstudent.company)


// 2. Object Literal
var student = {
    name : "Jagan Rao",
    age: 28,
    mobile: 8122140332,
    company: "Capgemini"
}
console.log("Name:" +student.name+ " Age:" +student.age + " Mobile:" +student.mobile + " Company:" +student.company)


// 3. Object Constructors using New Keyword
function addstudents(fullname, age, mobile, company)
{
    this.fullname = fullname;
    this.age =  age;
    this.mobile =  mobile;
    this.company = company;
}

var students = new addstudents("Jagan", 29, 8122140332, "Google"); 
console.log("Name:" +students.fullname+ " Age:" +students.age + " Mobile:" +students.mobile + " Company:" +students.company)
console.log(students);


// 4. Class Constructor using new keyword
class addstudents_class {
    constructor(fullname, age, mobile, company) {
        this.fullname = fullname;
        this.age = age;
        this.mobile = mobile;
        this.company = company;
    }
}

var student_class = new addstudents_class("Rao", 30, 8122140332, "Infosys");
console.log("Name:" +student_class.fullname+ " Age:" +student_class.age + " Mobile:" +student_class.mobile + " Company:" +student_class.company)
console.log(student_class);