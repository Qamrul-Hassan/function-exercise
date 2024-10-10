/* 
Here's a JavaScript function that checks whether a string starts with a specific substring 
using startsWith() and ends with another substring using endsWith()*/

function checkStrtAndEnd (str, startSubstr, endSubstr){
    let startsWith = str.startsWith(startSubstr);
    let endsWith = str.endsWith(endSubstr);

    return {
        startsWith: startsWith,
        endsWith: endsWith
    };
}

console.log(checkStrtAndEnd("Hello, world!", "Hello", "world"));
console.log(checkStrtAndEnd("Hi My name is Qamrul hassan", "name", "hassan"));
console.log(checkStrtAndEnd("JavaScript is a smart language", "Script", "smart"));