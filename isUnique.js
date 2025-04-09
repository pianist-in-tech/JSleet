/* Task: Implement an algorithm to determine if all characters in a string are unique. What if you cannot use additional data structure?

 1. Ask if it is ASCII string or Unicode. 
2. Assuming it is ASCII.
*/

//Brute force approach (O(n2))
function isUnique(str){
    for (let i=0; i<str.length; i++){
        for (let j = i+1; i<str.length; j++){
            if (str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}

// Boolean approach (Time: O(n), Space: 0(1))
/* Create an array of booleans, where the flag at index 1 idicates whether character 1 in the alphabet is contained in the string:
- check which letters of the alphabet appear in a given string
- for this - use boolean array
- the index of this array corresponds to the position in the alphabet (1-a, 2-b, etc.)
*/

function isUnique2(str){
    //create a new array with 128 empty slots(charachters of ASCII table)
    //fill every element in the array with the value false
    //to track whether each character in the string has been seen before
    const seen = new Array(128).fill(false); 

    for(let char of str){
        if (str.length > 128) {
            return false; // Early exit: more than 128 characters means duplicates are inevitable
          }
        
          if (str.length === 1) {
            return true; // A string with one character is always unique
          }

        //get the ASCHII code of the character char
        const code = char.charCodeAt(0);
        if (seen[code]) return false;
        seen[code] = true;
    }
    return true;
}
 console.log (isUnique("ahtkskld"))
 console.log (isUnique2("sdfljhliuuearlg"))
/*
🔤 ASCII (American Standard Code for Information Interchange)
Characters supported: Only 128 characters.

Character set includes: English letters (A-Z, a-z), digits (0-9), and some punctuation and control characters.

Bit size: 7 bits per character.

Limitation: Can’t represent characters from other languages (like é, 你, Я, etc).

Example:

A in ASCII = 65

a in ASCII = 97

Extended ASCII uses the full 8 bits, allowing 256 characters (0–255)

🌐 Unicode
Characters supported: Over 143,000 characters (and still growing).

Character set includes: All major scripts and symbols from most of the world's writing systems (including emojis!).

Bit size: Varies — UTF-8 (1 to 4 bytes), UTF-16 (2 or 4 bytes), UTF-32 (4 bytes).

Advantage: It’s a universal system — one encoding to rule them all!

Example:

A in Unicode = U+0041

你 in Unicode = U+4F60

😀 in Unicode = U+1F600
*/