const stringHandler = () =>{
	const replaceString = (string,size,token,replace) =>{
		let temporalArray = string.substring(0,size).split(token);
		return temporalArray.map(key=>key != " "? key : replace).join("")
	}

	return{
		replaceString
	}
}
const app = stringHandler().replaceString("Mr John Smith    ","13", "", "%20");
console.log(app)