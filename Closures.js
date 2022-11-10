// CLosure in javascript is a feature where an inner function have access to the outer function variable.
// 1.has access to own scope, variable define in curly bracket
// 2.has access to variable of outer scope function
// 3.has access to global variable

const a = 10; // global variable - Closure
function parrentFunction()
{
    const b = 10; // outer scope - Closure
            function innerFunction()
            {
                const c = 10; // local variable
                    function nestFunction()
                    {
                        var total = a+b+c; // we can able access the outer scope variable called closure
                        return total;
                    }
                    return nestFunction();
            }

    return innerFunction();
}

var total = parrentFunction();
console.log(total);