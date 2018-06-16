const app = () => {
	var memory = 
	{ 
	 	"0" : 0,
	 	"1" : 1
	};

	function fibonacci(number){
		if(memory[number] == undefined){
			memory[number] == fibonacci(number-1) + fibonacci(number-2)
		
		}
		return memory[number] 	
	}


	console.log(fibonacci(10))
}

var x = app()
