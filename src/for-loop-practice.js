// Question 1: Write a for loop that iterates from 1 to 10 and prints each number to the console.
for (let a = 1; a <= 10; a++) {
    console.log(a)
}

// Question 2: Write a for loop that iterates from 10 to 1 and prints each number to the console in reverse order.
for (let m = 10; m >= 1; m--) {
    console.log(m)

}

// Question 3: Write a for loop that iterates through the following array and prints each element to the console:
const arr = ['a', 'b', 'Akash', 'Ramesh', 'Binit']

for (let n = 0; n < arr.length; n++) {
    console.log(arr[n])
}

const array = [1, 2, 3, 4, 45, 5, 6, 7, 8, 9, 0]

for (let j = 0; j < array.length; j++) {
    console.log(array[j])
}


// Question 4: Write a for loop that iterates through the following array and prints each even number to the console:

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 200, 202, 208, 338]

for (let b = 0; b < num.length; b++) {
    if (num[b] % 2 === 0) {
        console.log(num[b]);
    }
}

// Question 5: Write a for loop that iterates through the following array and creates a new array containing the square of each element:

const rew =[1,2,3,4,5,6,7,8]

const newRew =[]

for (let k=0; k <rew.length; k++){
    newRew.push(rew[k]*rew[k]);
}
console.log(newRew)

