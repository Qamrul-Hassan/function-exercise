/*1. Write a function that compares two strings and checks if they are equal, 
regardless of case sensitivity. Use `toLowerCase()` or `toUpperCase()`.*/


function compareStr (str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase ();
}
    console.log(compareStr ("Hello", "hello"));
    console.log(compareStr("World", "world"));
    console.log(compareStr("QamrulHassan", "QAMRUL"));
