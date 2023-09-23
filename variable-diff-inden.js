console.log("In this code we see the Differences of declaration in variable by using the 3 different identifiers i.e, (let,var, const) ")

console.log("Before ES6 in javascript var is uses a identifier to declared the variables")

// for example //

var r = "Party kab dega!!";
var a = 45
var c = null
var m = undefined
console.log(r)

// block code 

{
    var r = 6899
    console.log(r)

}
//____________________________________________________________________________________________________________

let r = "Party kab dega!!";
let a = 45
// let a = 9  //here in this case the terminal shows the error that  let a = 9
    // ^
    // SyntaxError: Identifier 'a' has already been declared
let c = null
let m = undefined
console.log(r)
console.log(a)
console.log(c)
console.log(m)
console.log()

// block code 

{
    let r = 6899
    console.log(r)

}

// // ____________________________________________________________________________________________________________________
const r = "Party kab dega!!";
const a = 45
const c = null
const m = undefined
console.log(r)

// block code 

{
    const r = 6899
    console.log(r)

}

// _______________________________________________________________________________________________________________________
const author = "Binit";
console.log(author)

// const author = "shyam"; 
//const author = "shyam";
// ^
// SyntaxError: Identifier 'author' has already been declared









