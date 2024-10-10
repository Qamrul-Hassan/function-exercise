/* 2. Write a function that takes a sentence and a word as input and checks if the word is present 
in the sentence using `includes()` and `indexOf()`. 
Return the index of the first occurrence or -1 if not found.*/

function findInSentence(sentence, word) {
    if (sentence.includes(word)) {
        return  sentence.indexOf(word);
    }else {
        return-1;
    }
}
console.log(findInSentence ("Hi My name is Qamrul Hassan Shajal. I Live in Dhaka, Bangladesh", "in"));
console.log(findInSentence ("Hi My name is Qamrul Hassan Shajal. I Live is Dhaka, Bangladesh", "India"));