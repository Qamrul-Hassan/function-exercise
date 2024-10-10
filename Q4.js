/*4. Write a function that takes a sentence and splits it into an array of words using `split()`. 
Then, return the array of words. */

function splitToWards (sentence){
    let wordsArray = sentence.split(' ');
    return  wordsArray;
}
console.log(splitToWards( "Hi everyone how is going on?"));
console.log(splitToWards("Hello world! How are you?"));