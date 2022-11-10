// 1. Object Literal
var student = {
    name : "Jagan Rao",
    age: 28,
    mobile: 8122140332,
    company: "Capgemini",
    showFunction: function showmessage() {
        console.log("Hello Everyone")
    }
}

function showmessage()
{
    console.log("Hi! " + student.name)
}

student.message = showmessage;
console.log(student.name);
console.log(student)