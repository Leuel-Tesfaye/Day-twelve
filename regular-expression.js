// regular expression or regExp is a small programming language that helps to find pattern in data. 
// used to check if some pattern exists in a different data types. 
// RegExp parameters : takes two parameters on required search pattern and an optional flag.
// pattern : can be a text or any form of pattern which some sort of similarity. 

/** flags : are optional parameters in a regular expressions which determine the type of searching 
 * g : a global flag which means looking for pattern in the whole text 
 * i : case insensitive flag (it search for both lowercase and uppercase)
 * m : multiline 
 */

// creating a Regular expression without global and case insensitive flag .
let pattern = 'love'
let regExp = new RegExp(pattern)
console.log(regExp)

// declaring regular expression with global and case insensitive flag 
let patter2 = 'love'
let flag = 'gi'
let regX = new RegExp (patter2, flag)
console.log(regX)

// regular expression objects 
// test() : test for a match in a string . it returns true or false 
const str = 'I want to be the best frontend developer'
const check = /developer/
const result = check.test(str)
console.log(result)

// match () : returns an array containing all of the matches, including capturing groups or null if no match is found 
const string = ' I love javascript programming language '
const checkPattern = /programming/
const output = string.match(checkPattern)
console.log(output)

// search () : tests for a match in  a string. it differs from test () because this returns the index 

const input = '30 days of javascript programming tutorial'
const find = 'days'
const results = input.search(find)
console.log(results)

/**
 * replacing a substring 
 * replace() :  executes a search for a match in a string and replace the matched substring with replacement string
 */
const str1 = 'I would like to learn javascript '
const matchReplace = str1.replace(/javascript|Javascript/, 'Front End development')
console.log(matchReplace)

