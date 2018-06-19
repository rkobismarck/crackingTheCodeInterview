const palindrome = () => {
  
  // Recursive Way.
  const isThisAPalindrome = (word) =>{
    if(word.length <= 1){
      return true;
    }else{
      let array = word.toLowerCase().replace(/[^\w\s]|_/g, "").split(" ").join("").split("");
      let head  = array.shift();
      let tail  = array.pop();
      if(head != tail)
        return false;
      else
        return isThisAPalindrome(array.join(""))  
    }
  }

  // Non recursive Way.
  const isThisAPalindromeNR = (word) =>{
    let array = word.toLowerCase().replace(/[^\w\s]|_/g, "").split(" ").join("").split("");
    let head = 0;
    let tail = array.length-1;
    while(Math.abs(head - tail) > 1 ){
      if(array[head] != array[tail]){
        return false;
      }
      head++;
      tail--;
    }
    return true;
  }

  const transformToHashMap = (argument) => argument.reduce((acc,key) =>{
    if(acc[key] == undefined){
      acc[key] = 0;
    }else{
      acc[key]++;
    } 
    return acc
  }  ,{})

  const transformToArrayOfTokens = (argument) => argument.split(" ").join("").split("");


  // Hash Map Way (Unordered Input)
  const isThisAPalindromePermutation = (word) =>{
    let clearString     = transformToArrayOfTokens(word);
    let mapOfTokenPresence  = transformToHashMap(clearString); 
    let residualTokens    = Object.values(mapOfTokenPresence).filter(e => e % 2 == 0)
    return residualTokens.length == 1 ? true : false;   
  }
  
  return{
    isThisAPalindrome,
    isThisAPalindromeNR,
    isThisAPalindromePermutation
  }
};

module.exports = palindrome();