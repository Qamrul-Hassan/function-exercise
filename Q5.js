/* 5. Create a function that extracts a portion of a string using both `slice()` and `substring()` methods. 
The start and end indices should be passed as arguments to the function.*/

function extractPortion (str, start, end) {
    let slicePart = str.slice(start, end);
    let substringPart = str.substring(start, end);

    return {
        sliced: slicePart,
        substring: substringPart
    }
}
console.log (extractPortion("My name is Qamrul Hassan", 11, 24));
console.log (extractPortion("Hello!, Wit students", 7,20));