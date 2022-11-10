/* 
What is Array?
Array is an object is used to store the multiple values in single variable.
*/

//Create Array
let mainfamily = ['Jagan','Vichu','Dhiyan','Dhiya'];
console.log(mainfamily);

// Access the Array
let father = mainfamily[0];
console.log(father);

// Length Of Array
let lengthfather = father.length;
console.log(lengthfather);

// Access the last Element of Array
let lastelement = mainfamily[mainfamily.length - 1];
console.log(lastelement);

// Array Operations
// loop array items
 mainfamily.forEach ((item,index) => { console.log(item,index)})

//Array Methods:
// ToString() - used to convert any integer or array to string

let mainfamilystring = mainfamily.toString();
console.log(mainfamilystring);
 
// Pop Method - used to remove the last element from array
let removelast = mainfamily.pop(); // last element is removed by pop
mainfamily;
removelast;

// Push Method - used to push the elememt in last index array
let addlast  = mainfamily.push('Dhiya'); // added element in last index array
console.log(mainfamily);

// Shift Method - remove the 1st element in array
let add = mainfamily.shift();
console.log(add);
console.log(mainfamily);


// UnShift Method - add the element in 1st element in the array
let addfather = mainfamily.unshift('Jagan'); // add jagan in 1st element
console.log(mainfamily);

// Concat method - Merge the array using concat method and store it into New Variable
let children = ['vj'];
let mergefamilychildren = mainfamily.concat(children); // marged data stored in new variable

console.log(mainfamily); 
console.log(mergefamilychildren);

// Sort Method - Accending Order
let asc_sort = mergefamilychildren.sort();
console.log(asc_sort);

// Sort Method - Decending Order 
let dec_sort = mergefamilychildren.reverse(); // original value also changed & stored in new variable
console.log(dec_sort);


// Map, Reduce & Filters
// Map Method - It will create New Array and Perform operation on each element in the array.

let numarray = [1,2,4,5,6,88,33,44,22,11,99];

// Map using Normal Function
let mularray = numarray.map(multiply);
function multiply(values)
{
    return values * 6
}
numarray; // it will not modify the original array
mularray; // this is new array element created by map method

// Map using Array Funcion
let arrowmul = numarray.map ( (item) => {
    return item * 6
})
numarray; // it will not modify the original array
arrowmul; // this is new array element created by map method

// Fiter Method - filter the array based on the set of conditions
let lessthan = numarray.filter( (item) => {
    return item < 50;
})

let greaterthan = numarray.filter( (item) => {
    return item > 50;
})

lessthan;
greaterthan;


// Reducer Method - Used to sum the all the elements or all values down to one value using function
let sumall = numarray.reduce( (prev_value,current_value) => prev_value*current_value);
sumall;