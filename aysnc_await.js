/*
Async/Await are built on top of the promises to express asynchronous actions.
Inside the function, Await keyword can be applied to any promise.
Which will defer the execution untill the promise resolve.

Aysnc = Function with Aysnc Keyword it will return Promises.
Await = The Await Method is used to wait for the promise to either get fullfilled or rejected
        The Await Method is block the execution of the aysnc function at the place it is located in

Advantages:
        Aysnc Functions makes the code redable & easier to handle than promise.

Syntax:

Async function function_name()
{
    await some_promise();
}
*/

//Program: Check Score & Display result

// Using Async/Await method:

let result = function(score)
{
    return new Promise( function(resolve,reject)
    {   console.log("Calculating Result....");
        score>=50 ?  resolve(score)  : reject(`Score :${score} You have Failed the exam`);
    });
}


let grade = function(score)
{
    return new Promise( function(resolve,reject)
    {
        score ? resolve("Grade : A - Grade") : reject("F -  Failed");
    });
}


async function exam()
{
   try{
    let score = await result(90);
    console.log("Await Method:  Score: "+score +" | Congrats!! You have Passed Exam.");
    let finalgrade = await grade(score);
    console.log(finalgrade);
   }
   catch(err)
   {
    console.log(err);
   }
}
exam();

// Normal Promise Method

// result(20).then(
//     function(score)
//     {
//         console.log("Score :"+score +" Congrats!! You have Passed Exam.");
//         return grade(score)
//     }
// )

// .then(
//     function(score)
//     {
//         console.log(score);
//     }
// )
// .catch(
//     function(err)
//     {
//         console.log(err);
//     }
// )