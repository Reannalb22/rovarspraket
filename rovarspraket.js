/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if ( a > b ) return a
   	return b
};

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    if (a > b && a > c){
    	return a;
    } else if (b > a && b > c){
    	return b;
    } else {
    	return c;
    }
};


console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));


// PART 1.5

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

function maxOfArray(array){

return Math.max.apply(null, array);

};


console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
    if (typeof symbol==='number') {
    	return false;
    }

    var vowel=["a","e","i","o","u"];
    var symbol2=symbol.toLowerCase();

for(var i=0; i<vowel.length; i++){
	if(vowel[i]===symbol2){
		return true;
	}
}

return false;

};	

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(language){
    var rovar = "";

	if(typeof language === 'number') {
		return "0";
	}

	var any = language.toLowerCase();

	for(var i=0; i < any.length; i++){
		if((any[i] !== "a")&&(any[i] !== "e")&&(any[i] !== "i")&&(any[i] !== "o")&&(any[i] !== "u")){
			rovar += any[i] + "o" + any[i];
		} else {
			rovar += any[i];
	}
}
	return rovar;
};

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    return str.split("").reverse().join("");
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    var word = sentence.replace(/'/g,"").split(" ");
    var longest=0;
    var answer;



    for(var i=0; i < word.length; i++){
    	if(word[i].length === longest){
    		answer = word[0];
    	}

    	if (longest < word[i].length){
    		longest = word[i].length;
    		answer = word[i];	
    	}
	}
    	return answer;
};

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")

