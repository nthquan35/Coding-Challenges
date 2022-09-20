/*
Create a function that will test if a string is a valid PIN or not via a regular expression.

 

A valid PIN has:

 


	
Exactly 4 or 6 characters.
	
Only numeric characters (0-9).
	
No whitespace.


Examples

validPin("121317") ➞ true
validPin("1234") ➞ true
validPin("45135") ➞ false
validPin("89abc1") ➞ false
validPin("900876") ➞ true
validPin(" 4983") ➞ false

Notes


	
Empty strings should return false when tested.
*/

function validPin(pin){
	let regexp4d = /^((\d{4}))$/;
	let regexp6d = /^((\d{6}))$/
	if (pin.match(regexp4d)){
		return true;
	}
	else if (pin.match(regexp6d)){
		return true;
	}
	else{
	 	return false;
	}
}

console.log(validPin("121317"));
console.log(validPin("1234"));
console.log(validPin("45135")) ;
console.log(validPin("89abc1"));
console.log(validPin("900876")) ;
console.log(validPin(" 4983"));