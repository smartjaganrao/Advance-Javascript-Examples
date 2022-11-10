/* 
Javascript Function - group of code can be used to call anywhere in program
Function Expression - store the function in variable
Function Constructor - function can be defined as keyword function
Self Invoking Function - automatic calling of function
Function as Value - in Javascript, function is value so we can deal with value.
Array Functions // Adv: more suited for methods / Disadv: they cannot be used for constructor
Generator Functions - Return Mutiple values using Yield / One after one, On Demand
Predifined Function:
1. eval - evaluate string and return value.
2. parseInt - parse string value & return interger value
3. parseFloat - parse string value * return float vlaue
4. escape - return the hexadecimal encoding of arguments
5. unescape - return the ASCII string for the specified value
*/

// Javascript Function - group of code can be used to call anywhere in program
function multiply(a,b)
{
    return console.log(a*b);
}
multiply(5,25); // pass the data into function


// Function Expression - store the function in variable
var Add =  function addfunction(a,b) { return a+b;} // store it into add variable
var finaladdedvalue = Add(3,6); // call the function with add variable and pass the input's
console.log(finaladdedvalue); // Final Result


// Function Constructor - function can be defined as keyword function
var subtract = new Function (
"a",
"b",
"return a-b"
);
var finalsubvalue = subtract(44,88)
console.log(finalsubvalue);

// Self Invoking Function - automatic calling of function
(function multiply(a=6,b=2) // no need to declare the variable in parameters just add the variable with values
{
    return console.log(a*b); 
}
)();
// syntax: ( add the function inside this parenthensis)();

//Function as Value - in Javascript, function is value so we can deal with value.
function multiply(a,b)
{
    return a*b;
}
var mul = multiply(5,5)*20; // function have values so we can do the operation directly 
console.log(mul);


// Function as Objects - javascript function are special type of objects, called function objects.
// function object include the string which hold Code

// Program : Find Area of Circle
var code = "return Math.PI *radious *radious"; // PI r Square
var circle = new Function("radious",code);
var findrad = circle(10);
console.log(findrad);


// Arrow Function 
// -suited for methods
// -they cannot be used for constructor

var divide = (a,b) =>
{
    return a/b;
}
var finaldivision = divide(89,66)
console.log(finaldivision);


// Generator Function - Return Mutiple values using Yield / One after one, On Demand
// Need to add the * in function*
// Next() have 2 property
// Done : true if function code is finished else false otherwise
// Value : return value in yield
function* generatorFunction()
{
    yield 8+8;
    yield 2+2;
    yield 3-4;
    yield 4*7;
    return 5*5; // untill return value
}

var gen = generatorFunction(); // assign function to variable
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// Predefined Function:
/*
1. eval - evaluate string and return value.
2. parseInt - parse string value & return interger value
3. parseFloat - parse string value * return float vlaue
4. escape - return the hexadecimal encoding of arguments
5. unescape - return the ASCII string for the specified value
*/

let a = 100;
console.log(eval("5+5")) // string number to integer value
console.log(eval("10*a")) 
console.log(parseInt("10.32323")) 
console.log(parseFloat("10.32232")) 
console.log(escape("jagan")) 
console.log(unescape("ascii")) 

