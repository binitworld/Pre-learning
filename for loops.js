console.log("Loops in java script")
console.log("Types of loops in java script is 5 types: ")
console.log('For loop:- loop a block of code no. of trees.')
console.log('for in loop:- loops through the keys of an object')
console.log('for of loop:- loops through the values of an object')
console.log('while loop := loops a block based on a specific condition ')
console.log('do while loop := while loops variant which runs at least once ')

// for (let i=0; i<20; i++){
//     console.log(i)
// }
for (let i = 1; i < 21; i++) {
    console.log(i)

}


// 2.for in loop:- loops through the keys of an object
let obj = {
    n: 40,
    m: 0,
    v: 34,
    r: 78
}

for (let a in obj) {
    console.log(" Marks of "  +  a  +  " are " + obj [a]);
};

// 2. for of loop:- loops through the values of an object
for (let b of "Bunny" ){
    console.log("value of Bunny is ", b);
};