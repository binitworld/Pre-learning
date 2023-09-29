// Question 1: Write a for-in loop that iterates over the following object and prints each key-value pair to the console:
const j = {
    name: "hacker",
    age: 56,
    occupation: "software defender"
};
for (const key in j) {
    console.log(`${ key }: ${ j[key]}`);
}
