//JS code that prints multiples of 5 up to 50 using For loop & while loops
console.log("Using For loop");
for(i=5; i<=50; i++)
{
    if((i%5)==0)
    {
        console.log(i);
    }
    else
    {
        continue;
    }
}


console.log("Using While loop");
var j=5;
while(j<=50)
{
    if((j%5)==0)
    {
        console.log(j);
        
    }
    j++;
}