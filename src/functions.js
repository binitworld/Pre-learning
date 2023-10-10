function Avg(x,y){
    console.log("Done")
    return (x+y)/2;
    
}
let a = 1;
let b = 2;
let c = 3;



console.log('Average  of a and b is : '+ Avg(a,b));
console.log('Average  of c and b is : '+ Avg(b,c));
console.log('Average  of c and a is : '+ Avg(c,a));



function raja(j,m){
    return Math.round((j*m)/(j+m));
}

let g = 89;
let u = 27;
let h = 9;

const sum = (g,u) => {
    return (g+u);
}

console.log("The const method is used to calculate the sum function of g and u  so the sum is : " +sum(g,u))
console.log("The solution this  will :"+raja(g,u))
console.log("The solution this  will :"+raja(u,h))
console.log("The solution this  will :"+raja(g,h))


