
// Run this in browser console ctrl+shift+I then:
let age = prompt("Hey, what's your age?");
age =Number.parseInt(age) //converting a string to a number
console.log("You entered: " + age);

if (age>0){
    console.log ("This is a valid age");
}
else if (age<15){
    console.log ("  Valid age , but !you are a kid ");
}
else if(age>18 && a>15) {
    console.log("You age is valid, but you are not a kid")
}
else{
    console.log("not a valid age ")
}

