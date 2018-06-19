const stringCompression = () => {
  
  const compressString = (array,counter,character,string) => {
    let arrayCharacters = array.split("");
    if(arrayCharacters.length == 0){
      return string
    }else{
      let item  = arrayCharacters.shift();
      if(character != undefined){
        if(character == item){
          counter++;
          character = item;
          string    = string.substring(0,string.length-1)+""+counter
        }else{
          counter   = 1;
          character = item
          string   += item +""+ counter
          
        }
        
      }else{
          counter   = 1;
          character = item;
          string    = character +""+counter;
      }
      
      return compressString(arrayCharacters.join(""),counter,character,string)
      
    }
    return string;
  }

  const isSmallerTheCompressedString = (string) =>{
    let compressedString  = compressString(string);
    return (compressedString.length < string.length) ? compressedString : string
  }

  return{
    isSmallerTheCompressedString
  }
};

module.exports = stringCompression();