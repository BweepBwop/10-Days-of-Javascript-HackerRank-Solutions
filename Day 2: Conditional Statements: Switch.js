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

function getLetter(s) {
    s = s[0].toLowerCase();
    
// My Solution----
    switch (true) {
        case ['a', 'e', 'i', 'o', 'u'].includes(s):
            return 'A';
        case ['b', 'c', 'd', 'f', 'g'].includes(s):
            return 'B';
        case ['h', 'j', 'k', 'l', 'm'].includes(s):
            return 'C';
        default:
            return 'D';
    }
}
// ------------------

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
