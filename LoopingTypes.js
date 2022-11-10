// Loops Methods:
// 1. For Loop
var x;
for(x=1;x<=10;x++)
{
    console.log("x = ",x);
}

var y = 1;
// 2. While Loop
while(y <= 10)
{
    console.log("y = ",y);
    y++;
}

// 3. Do While Loop
z = 1;
do
{
    console.log("z =" ,z);
    z++;
}

while (z <= 10);


// 4. Break the Loop - Break keyword

for(let i =0;i <10 ; i++)
{
    console.log("i =" ,i);
    if(i == 7)
    {
        break;
    }
}

// 5. Skip the loop -  Continue keyword

let n;

for(n=1;n <= 10 ; n++) // 
{
    if(n == 7)
    {
        continue; // it will skip the particular loop then n value will be increased n+1
    }
    console.log("n =" ,n);
}
