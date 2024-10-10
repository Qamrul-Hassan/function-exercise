/* 7. Write a function that takes a number and returns its absolute value using `Math.abs()`. 
Also, calculate the power of the number to another number using `Math.pow()`. */

function calculate (base, exponent) {
    let absoluteValue = Math.abs(base);
    let powerValue = Math.pow(base, exponent);

    return{
        absolute: absoluteValue,
        power: powerValue
    };
}
console.log(calculate(-9, 12));
console.log(calculate(8, 4));