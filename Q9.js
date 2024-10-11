/* 9. Write a function that generates a random number between two given numbers using 
`Math.random()` and ensures that the result is a whole number. */

function getNandomNumber (min, max){
    let randomNum = Math.random() * (max - min + 1)+min;
    return Math.floor(randomNum);
}
console.log(getNandomNumber(1, 10));
console.log(getNandomNumber(4,30));