/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */


var sumOfArray = function(numArray) {
    var sum = 0                                     // initialize sum to 0
    for (var i = 0; i < numArray.length; i++) {     // iterate through input numbers
        sum += numArray[i]                          // add each index to sum
    }
    return sum
}

var newSumOfArray = numArray.reduce((a, b) => a + b, 0);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.

var maxOfArray = function(numArray) {
    var max = 0                                     // initialize max to 0
    if (numArray.length === 0) {                    // if input array is 0,
        return null                                 // return null
    }
    for (var i = 0; i < numArray.length; i++) {     // otherwise, iterate through array of input numbers
        if (max < numArray[i]) {                    // and if the max is less than the current index,
            max = numArray[i]                       // make max the current index
        }
    }
    return max
}

var newMaxOfArray = numArray => Math.max.apply(null, numArray)

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */

var isVowel = function(character) {
    var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'] // create array of vowel characters
    for (var i = 0; i < vowels.length; i++) {                       // iterate through array of vowels
        if (character === vowels[i]) {                              // if the input char matches a vowel,
            return true                                             // it's true
        }
    }
    return false                                                    // otherwise it's false
}

var newIsVowel = x => /[aeiouAEIOU]/.test(x);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(string) {
    var reversedString = ""                             // create an empty string to store reversed
    for (var i = string.length - 1; i >= 0; i--) {      // iterate backwards through input string
        reversedString = reversedString + string[i]     // add each index to reversed string
    }
    return reversedString
}


/**
 * Part 4
 *
 * write a function the returns a fizzbuzz string for an input number.
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */

var fizzbuzz = function(num) {
    var fizzbuzzStr = ""
    for (var i = 1; i <= num; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            fizzbuzzStr += "."
        }
        if (i % 3 === 0 && i % 5 !== 0) {
            fizzbuzzStr += "fizz"
        }
        if (i % 3 !== 0 && i % 5 === 0) {
            fizzbuzzStr += "buzz"
        }
        if (i % 3 === 0 && i % 5 === 0) {
            fizzbuzzStr += "fizzbuzz"
        }
    }
    return fizzbuzzStr
}

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

var findLongestWord = function(sentence) {
    var longestWord = ""                                    // create empty string to store longest word
    var wordsArray = sentence.split(" ")                    // turn input sentence into array so we can iterate
    for (var i = 0; i < wordsArray.length; i++) {           // iterate through array of words from input sentence
        if (longestWord.length < wordsArray[i].length) {    // if the current index is longer than our longest word
            longestWord = wordsArray[i].replace(/'/g, '')   // make the longest word the current index word, ignoring apostrophes
        }
    }
    return longestWord
}


/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

var GCD = function(num1, num2) {
    for (var i = num1; i > 0; i--) {            // begin iterating backwards from an input number
        if (num1 % i === 0 && num2 % i === 0) { // as soon as both input numbers are divisible by i,
            return i                            // return i
        }
    }
    return 1                                    // otherwise, return 1
}
