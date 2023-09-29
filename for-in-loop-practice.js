// Question 1: Write a for-in loop that iterates over the following object and prints each key-value pair to the console:
const j = {
    name: "hacker",
    age: 56,
    occupation: "software defender"
};
for (const key in j) {
    console.log(`${key}: ${j[key]}`);
}
// 1.1
const e = {
    name: 'Rohit',
    age: 78,
    occupation: "Retd. Software engineer"
};
for (const _best in e) {
    console.log(`${_best}:${e[_best]}`)
}

// : Write a for-in loop that iterates over the following object and prints the sum of all the values to the console:

const object = {
    a: 1,
    b: 4,
    c: 5,
};
let sum = 0;

for (let m in object) {
    sum += object[m];
}
console.log(sum);

// Question 3: Write a for-in loop that iterates over the following object and creates a new object containing only the key-value pairs for the properties that start with the letter "a":
const tost = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    apple: 'red',
    banana: "Yellow"
};

const newObj = {};
for (const k in tost) {
    if (k.startsWith("a")){
    newObj[k] = tost[k]
}
}
console.log(newObj)