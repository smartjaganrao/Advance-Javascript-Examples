/* 
Why? Javascript Promises?
Javascript is single threded scripting language. so it make slow & restrictive.
with help of promises & other asynchronous concepts. 
So javascript can perform long network requests simultanously without blocking main thread.

What is Javascript Promises?
Javascript promises can perform asynschronous action and wait for some time to get the response.
*/

let car_fuel_tankfull = true;
let car = new Promise ( function(resolve,reject)
{
        console.log("Filling the car tank");
        if(car_fuel_tankfull)
        {
            resolve();
        }
        else{
            reject();
        }
    })

    car.then(
    function() 
    {
        console.log("Car Pertol Tank is fully completely")
    })
    
    .catch(
    function()
    {
        console.log(" Car Tank is empty")
    })


    let check_rain = function() 
    {
        return new Promise (function(resolve,reject) { 
            var rain = true;
            if(rain)
                resolve("\nChecking outside is raining... \n");
            else
                reject();
        })
    }

    let check_school = function(result) 
    {
        return new Promise (function(resolve,reject) {
            var checkschool = true;
            if(checkschool)
                resolve(result+ "Checking tv for school leave or not...... \n");
            else
                reject();
        })
    }

    let check_tv = function(result) 
    {
        return new Promise (function(resolve,reject) {
            var checktv = true;
            if(checktv)
                resolve(result+ "Today School Leave!! Enjoy the leave with Family!");
            else
                reject();
        })
    }

    // CallBack Method
    check_rain().then
    ( 
        function(result)
        {
            return check_school(result) // just pass the data to check_school
        })
    .then(
        function(result)
        {
            return check_tv(result) // just pass the data to check_tv
        })
    .then(
        function(result) // All the appended data to result
        {
            return console.log("Final Result :"+ result)
        })