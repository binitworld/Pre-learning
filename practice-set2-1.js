// Use logical operator to find out the age of a person is whether lies b/w 10 and 20

let age = prompt("enter your age:");
age=parseInt(age);
if (age===10){
    console.log("You are 10 years old");
}
else if(age>=10 && age<20){
    console.log("You are a teen ager and your age might be lies b/w 10 to 20");
}
else if(age===20){
    console.log("Your are 20 yr. old");
}
else(age>20)
{
    console.log("You are above 20 years");
}