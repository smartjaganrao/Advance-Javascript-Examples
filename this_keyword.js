// THis KEyword
// in function it reffer to the global, to overcome problem we need to include this in function(){},this
// in object it reffer inside the object

function test1()
{
    var username = "Jagan";
    console.log(username);
    console.log(this.name);
}
test1(),this.name;
    
const random = 
    {
        username: "Jagan",
        getname()
        {
            console.log("My name is "+this.username);
            console.log("My name is "+username);
        }
    }

random.getname();

var username = "vichu";

const tutor = 
    {
        username: "Jagan",
        subjects: ['html', 'css', 'Javascript','React Js'],
        list() 
        { 
            this.subjects.forEach(function(item)
            {
                console.log("Normal Function :" +this.username, item);
            },this) // pass the this in forEach to access the this.username

            this.subjects.forEach( (item) =>
            {
                console.log("Arrow Function :" +this.username, item); // Arrow function have direct access
            })
        }
    }

    // Arrow Function can able to access the value directly but normal function cannot able to access the this.username
    tutor.list();




