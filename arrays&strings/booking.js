const booking =() =>{

	
	function triangle(a,b,c){
		if( a == b == c) {
			return 1; // Equilateral
		}else{
		 	if (a + b > c && a + c > b){
		 	return 2;	
		 	}
		}
		return 0;
	}


	function deltaEncoding(array){
		var arrayEncoded = [array[0]];
		for(let i = 0; i< array.length-1; i++){
			let temporalDifference = array[i+1] - array[i] ;
			if( temporalDifference < -127 ||temporalDifference > 127){
				arrayEncoded.push(-128)
			}
				arrayEncoded.push(temporalDifference)	
		}
		return arrayEncoded;
	}

	const transformToHashMap = (argument) => argument.reduce((acc,key) =>{
		if(acc[key] == undefined){
			acc[key] = 1;
		}else{
			acc[key]++;
		} 
		return acc
	} ,{});

	function howManyAgentsToAdd(noOfCurrentAgents, callsTimes) {
		let reducedMatrix = callsTimes.reduce((acc,item)=>{
			acc.push(parseInt(item[0]))
			return acc
		},[])
		let numberOfConcurrentCalls = transformToHashMap(reducedMatrix);
		let numberOfMaxConcurrent = Math.max.apply(Math,Object.values(numberOfConcurrentCalls))


		return numberOfMaxConcurrent - noOfCurrentAgents;
    }


	var x = howManyAgentsToAdd(1,[ 
		[ 1481122000, 1481122020 ],
		[ 1481122000, 1481122040 ],
		[ 1481122030, 1481122035 ] 
	])

	console.log(x)
}

var app = booking();