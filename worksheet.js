/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */


 var sumOfArray = function(numArray) {
 	var sum = 0
 	for (var i = 0; i < numArray.length; i++) {
 		sum = sum + numArray[i]
 	}
 	return sum
 }

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.

var maxOfArray = function(numArray) {
	var max = 0
    if (numArray.length === 0) {
        return null
    }
	for (var i = 0; i < numArray.length; i++) {
		if (max < numArray[i]) {
			max = numArray[i]
		}
	}
	return max
}


/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */

var isVowel = function(character) {
	var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
	for (var i = 0; i < vowels.length; i++) {
		if (character === vowels[i]) {
			return true
		}
	}
	return false
}

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

 var reverse = function(string) {
    var reversedString = ""
    for (var i = string.length -1; i >=0; i--) {
        reversedString = reversedString + string[i]
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
    var longestWord = ""
    var wordsArray = sentence.split(" ")
    for (var i = 0; i < wordsArray.length; i++) {
        if (longestWord.length < wordsArray[i].length) {
            longestWord = wordsArray[i]
        }
    }
    return longestWord;
}


/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

 var GCD = function(num1, num2) {
    for (var i = num1; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i
        }
    }
    return 1
}

