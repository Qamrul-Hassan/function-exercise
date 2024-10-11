/* 9. Write a function that generates a random number between two given numbers using 
`Math.random()` and ensures that the result is a whole number. */

function getRandomNumber (min, max){
    let randomNum = Math.random() * (max - min + 1)+min;
    return Math.floor(randomNum);
}
console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(6,30));