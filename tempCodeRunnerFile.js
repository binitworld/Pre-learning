const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 200, 202, 208, 338]

for (let b = 0; b < num.length; b++) {
    if (num[b] % 2 === 0) {
        console.log(num[b]);
        foundEven = true;
    }
    if (!foundEven) {
        console.log("No. are odd")
    }
}