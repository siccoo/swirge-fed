// QUESTIONS

// 2. Encode the password.
//     ie.
//         In this problem, we are asking for implementation of a function, f, that
//         encodes a String. The function f shall accept a String as an input and return
//         the encoded String as a return value. The encoding algorithm replaces every
//         character in the string with the letter that has exactly the same position
//         when counting backwards from letter “z” (with alphabet sort order in mind).
//         Non-alphabet characters are ignored.

//         Here are three examples:
//         i. Letter “a" is replaced by letter “z” (because “a” is the first letter of
//             alphabet and “z” is the first letter when counted from the end of the
//             alphabet list.)
//         ii Letter “c” is replaced by letter “x” (because “c” is the third letter of
//             alphabet and “x” is the third letter of alphabet when counted
//             backwards from letter “z".)

//             Therefore, when string “acp” is encoded, the return value is string “zxk”.
//             Please write and submit this function with any unit tests that you
//             would like to include.

// 2b. What would be the result of encoding the String “Errors in strategy
//     cannot be correct through tactical manoeuvres”?


// ANSWERS TO ALL QUESTIONS
function ceasarCipher(text) {
    let queryString = text.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", function(f) {
        switch (f) {
            case 'z': return 'a';
            case 'c': return 'x';
            case 'p': return 'k';
            default:  return String.fromCharCode(1 + c.charCodeAt(0));
        }
    });
    return caesar.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]+/g, function(string) {
        return string.toString(queryString);
    });
}

function replace(queryString) {
    let code = { "a": "z", "A": "Z", "b": "y", "B": "y", "c": "x", "C": "X", "d": "w", "D": "W", "e": "v", "E": "V", "f": "u", "F": "U", "g": "t", "G": "T", "h": "s", "H": "S", "i": "r", "I": "R", "j": "q", "J": "Q", "k": "p", "K": "P", "l": "o", "L": "O", "m": "n", "M": "N", "n": "m", "N": "M", "o": "l", "O": "L", "p": "k", "P": "K", "q": "j", "Q": "J", "r": "i", "R": "I", "s": "h", "S": "H", "t": "g", "T": "G", "u": "f", "U": "F", "v": "e", "V": "E", "w": "d", "W": "D", "x": "c", "X": "C", "y": "b", "Y": "B", "z": "a", "Z": "A", "ä": "ß", "Ä": "ẞ", "ö": "ü", "Ö": "Ü", "ü": "ö", "Ü": "Ö", "ß": "ä", "ẞ": "Ä" };
    return Array.from(queryString, c => code[c] || c).join('');
}
console.log(replace("swIrGE2019"));

// ANOTHER METHOD IS THE USE OF CHAR CODE TO AUTOMATICALLY FIND THE MATCHING PAIR
let a ='abcxyzABC'.replace(/./g,function(letter){
    if (letter>='a' && letter<='z') {
        return String.fromCharCode( 'z'.charCodeAt(0) - letter.charCodeAt(0) + 'a'.charCodeAt(0)  )
    }
    if (letter>='A' && letter<='Z') {
            return String.fromCharCode( 'Z'.charCodeAt(0) - letter.charCodeAt(0) + 'A'.charCodeAt(0)  )
    }
})

const queryStr = "Errors in strategy cannot be correct through tactical manoeuvres";
const usingSplit = queryStr.split('');
const usingSpread = [...queryStr];
const usingArrayFrom = Array.from(queryStr);
const usingObjectAssign = Object.assign([], queryStr);
