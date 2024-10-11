/* 8. Create a function that takes a decimal number and rounds it to the nearest integer using 
`Math.round()`. Also, return the number rounded up using `Math.ceil()` 
and rounded down using `Math.floor()`. */

function roundNumber(decimal){
let rounded = Math.round(decimal);
let roundUp = Math.ceil(decimal);
let roundDown = Math.floor(decimal);

return{
    rounded: rounded,
    roundUp: roundUp,
    roundDown: roundDown

    };
}
console.log (roundNumber(5.8));
console.log(roundNumber(9.6));