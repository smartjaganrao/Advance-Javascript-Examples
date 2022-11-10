// Get - used to get the value from object Property
var student1 = {
    name : "Jagan Rao",
    age: 28,
    mobile: 8122140332,
    company: "Capgemini",
    get companyName()
    {
        return this.company;
    }
}

console.log(student1.companyName);

// Set - used to set the value from Object Property
var student2 = {
    name : "Jagan Rao",
    age: 28,
    mobile: 8122140332,
    companyName: "",
    set setCompany( company)
    {
        this.companyName = company;
    }
}

student2.setCompany = "Google"; // Set value to the companyName using setCompany in Object property.
console.log(student2.companyName); // show the company name in object after changing companyname.