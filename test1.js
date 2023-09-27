const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the price of the box? ", function (answer) {
    console.log(`The price of the box is: ${answer}`);
    rl.close();
});
