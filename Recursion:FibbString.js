/* Weekly Coding Challenge: Recursion: Fibonacci String

 

A Fibonacci string is a precedence of the Fibonacci series. It works with any two characters of the English alphabet (as opposed to the numbers 0 and 1 in the Fibonacci series) as its initial items and concatenates them together as it progresses similarly to that of the Fibonacci series.

 

Examples
generate(3, ["j", "h"]) ➞ "j, h, hj"

generate(5, ["e", "a"]) ➞ "e, a, ae, aea, aeaae"

generate(6, ["n", "k"]) ➞ "n, k, kn, knk, knkkn, knkknknk"

generate(1, ["f", "g"]) ➞ "invalid"
// return "invalid" if n is less than 2 */

function fibbString(num, listChar){
	if (num < 2){
		return "invalid";
	}

	if (num == 2){
		return listChar.join(", ");
	}
	else {
		listChar.push(listChar.at(-1) + listChar.at(-2));
		//console.log(listChar);
		return fibbString(num-1, listChar);
	}	
}

console.log(fibbString(3, ["j", "h"]));
console.log(fibbString(5, ["e", "a"]));
console.log(fibbString(6, ["n", "k"]));
console.log(fibbString(1, ["f", "g"]));