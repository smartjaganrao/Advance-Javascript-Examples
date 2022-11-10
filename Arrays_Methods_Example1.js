/*
ForEach -
Filter -
Map -
Reduce -
Every -
Some -
Sort -
Slice -
Splice -
*/

var x = [];
var y = [1,2,3,4,5,6,7,8];

y.forEach( item => x.push({name: 'name'+item, age: item*2}));
console.log(" For Each Example - showdow copy");
console.log(x);
console.log(y);

x[0].age = 20; // Modify the data

var below8 = x.filter( a => a.age < 8);
console.log(" Filter Example - showdow copy");
console.log(below8);

var newbelow8 = below8.map( a => {
a.age *= a.age;
return a;
});

newbelow8[0].age = 30;
console.log(" Map Example - showdow copy");
console.log(newbelow8);

console.log(" Some Example - showdow copy");
var check_age8_greater = x.some( a => a.age > 8);

if(check_age8_greater)
{
    console.log("Some peoples have greater than 8 age")
}
else{
    console.log("No Age 8 Greater than");
}


console.log(" Every Example - showdow copy");
var checkbelow8 = newbelow8.every( a => a.age > 8);

if(checkbelow8)
{
    console.log("every peoples have greater than 8 age")
}
else{
    console.log("some peoples are age below than 8")
}


console.log(" Slice Example - showdow copy");
var removedpeoples = x.slice(0,3); // Removed 0,1,2 data from X Object and Store it in RemovedPeople
console.log(removedpeoples);

console.log(" Splice Example - showdow copy");
console.log("X Object")
console.log(x);

var removedpeoples = 
x.splice(0, 3,  // removed the 0,1,2,3 data from x  & Added removed values to People
{name : "Jagan ", age : 27}); // newly added NewName, Age in X variable:
console.log(removedpeoples);

console.log("X Object - Added New Peoples:")
console.log(x);

console.log("Reduce Example");
var numarray = [3,4,5,6,1,8,9,3,24,56,565];

var total = numarray.reduce ( (acc, current) => 
{
    console.log("Acc=" +acc  + " *" + " Current="+current);
    return current * acc
}
);

console.log(total) ;
console.log(x);

var result = x.reduce( (acc, cur) => {
    console.log(acc);
    console.log(cur);
    acc[cur.name] = cur.age;
    return acc
}, [])

console.log(result) ;


var descending_sorted = numarray.sort( (a,b) => b-a);
descending_sorted;

var accending_sorted = numarray.sort( (a,b) => a-b);
accending_sorted;