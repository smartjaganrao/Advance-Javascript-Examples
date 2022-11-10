console.log("Call Apply Bind");
// we can able to use the one function for all the properties.
// we can able to pass the values from the different properties
// we can able to access the inside function for the other properties

// Call - Pass the data by Arguments
// Apply - pass the data by Array Values
// Bind - pass the data by variable arguments

var user1= 
{
name : "Jagan",
age : 27,

getname : function (mobilenumber) 
{
    console.log("My name is " + this.name + ", Age is "+this.age +", Mobile Number is "+ mobilenumber)
}
}

var user2= 
{
name : "Vichu",
age : 20
}

var user3= 
{
name : "Dhiyan",
age : 25
}

var usercall = user1.getname.call(user1, '8122140332 - This is Call Method'); // we can pass data by arguments method

var userapply = user1.getname.apply(user2, ['8122140332 - This is Apply Method']); // we can pass data by array method

var userdata = user1.getname.bind(user3);
userdata('8122140332 = This is Bind Method');

usercall;
userapply;
userdata;