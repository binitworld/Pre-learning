let m = prompt("Enter the value of m :");

m = Number.parseInt(m);

let j=1;
let output =""; // initialize an empty string to accumulate output
while(j <m+1){
    output += j + "<br>"; //Append the number to output string with a line break.
    j++;
}

document.getElementById("output").innerHTML=output;

