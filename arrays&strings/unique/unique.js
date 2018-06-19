const unique = () => {
  // Additional data structures allowed.
  const isUnique = (word) =>{
    let map   = {};
    for(let i = 0; i< word.length; i++){
      if(map[word[i]] == undefined){
        map[word[i]] = true;
      }else{
        return false;
      }
    }
    return true;
  }   // O(n) => Worst case is looking the entire array 
    // and finding duplicities in the last element.
  
  const isUniqueDC = (word) => {
    let array = word.split("")
    if(array.length == 1){
      return true;
    }else{
      let temp = array.pop();
      if( array.indexOf(temp)!= -1){
        return false;
      }
      return isUniqueDC(array.join(""))  
    }   // O(n) => Worst case is looking the entire array
      // and finding duplicities in the last element.
  }

  return{
    isUnique,
    isUniqueDC
  }
}

module.exports  = unique();