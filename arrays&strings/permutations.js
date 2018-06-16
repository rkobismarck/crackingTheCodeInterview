const permutations = () => {
	const areThisWordsPermutations = (firstWord,secondWord) =>{
		
		// Corner case and simplest one.
		if(firstWord.length != secondWord.length)
			return false; 
		
		// Preparation of variables.
		firstWord  = firstWord.split("");
		secondWord = secondWord.split("");
		
		// Transform any object to a hash map.
		let map  = transformToHashMap(firstWord);

		// Compare each item into the hash map. 
		for(let i = 0; i<secondWord.length; i++){
			if(map[secondWord[i]] == undefined)
				return false;
		}

		return true;
	}


	const transformToHashMap = (argument) => argument.reduce((acc,key) =>{acc[key] = true; return acc}  ,{})


	return{
		areThisWordsPermutations
	}
}

var firstWord = "cara";
var secondWord = "arca";

var x = permutations().areThisWordsPermutations(firstWord,secondWord);
console.log(x)