// Maps and Sets Exercise

// Quick Question #1
// What does the following code return?

    // new Set([1,1,2,2,3,4])
    { 1,2,3,4 }

// __________________________________________________________

// Quick Question #2
// What does the following code return?

    
    // [...new Set("referee")].join("")

    "ref"

// __________________________________________________________

// Quick Questions #3
// What does the Map m look like after running the following code?

    /*
    let m = new Map();
    m.set([1,2,3], true);
    m.set([1,2,3], false);
    */

    { Array(3) => true }
    { Array(3) => false }

// __________________________________________________________

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

    /*
    hasDuplicate([1,3,2,1]) // true
    hasDuplicate([1,5,-1,4]) // false
    */

    const hasDuplicate = function (array) {
        return new set(array).size !== arr.length
    }

// __________________________________________________________

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

    /*
    vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
    vowelCount('Colt') // Map { 'o' => 1 }
    */

    const theVowel = letter => "aeiou".includes(letter);

    function vowelCount(str) {
        // creating empty map
        const vowelMap = new Map();
        // iterate over the charaters
        for(let letter of str) {
            // make the letters lowercase and save it to a variable called lowerCaseLetter
            let lowerCaseLetter = letter.toLowerCase()
            // if the vowel letter is a lowercase letter
            if(theVowel(lowerCaseLetter)) {
                // if the new Map has a lower case letter
                if(vowelMap.has(lowerCaseLetter)) {
                    // then we are going to set the lowerCaseletter as the value, and for each lowercaseLetter from vowelMap we will add 1 value
                    vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) + 1);
                } else {
                    // otherwise, the lowerCaseLetter the numerical key starts at 1.
                    vowelMap.set(lowerCaseLetter, 1);
                }
            }
        }
        return vowelMap;
    }
