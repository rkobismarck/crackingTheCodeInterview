const exercises = () => {

	function foo(){
		var sum = 0;
		var product = 1;
		for(var i = 0; i<array.length; i++){
			sum += array[i];
		}
		for(var j= 0; j< array.length; j++){
			product *= array[j];
		}
		console.log(sum + " , " + product)
	} // O(N) + O(N) => O(2N) => O(N)

	function printPairs(array){
		for(var i = 0 ; i < array.length;i++){
			for(var j=0; j< array.length; j++){
				console.log(array[i]+","+array[j])
			}
		}
	} // O(N^2)

	function printUnorderedPairs(array){
		for(var i=0; i< array.length; i++){
			for(var j = i+1; j< array.length; j++){
				console.log(array[i]+","+array[j])
			}
		}
	} // O(N^2)

	function printUnoerdedPairsTwo(arrayA, arrayB){
		for(var i = 0; i< arrayA.length; i++){
			for(var j=0; j< arrayB.length; j++){
				if(arrayA[i]<arrayB[j]){
					console.log(arrayA[i]+","+arrayB[j])
				}
			}
		}
	} // O(AB)

	return{
		foo,
		printPairs,
		printUnorderedPairs,
		printUnoerdedPairsTwo	
	}
}

const arrayA = [8,2,3,4,5];
const arrayB = [6,7,8,9,10];
const tester = exercises([1,2,3,4,5]);
tester.printUnoerdedPairsTwo(arrayA,arrayB)