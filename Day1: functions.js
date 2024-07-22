'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*Here is my solution, I utilized the ternary operator to shorten the code, n will be the variable input , 
it will return 1 if the input is less than 2 so 1 or 0 inputs will equate to 1, then n will multiply to n-1
example: n = 4 , 4 * 3 then 4 * 3 * 2 * 1
*/
function factorial(n){
    return n < 2 ? 1 : n * factorial(n-1);
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
