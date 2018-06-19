const rotation = () => {

  const isSubstring = (stringA, stringB) => {
    if(stringA == undefined || stringB == undefined){
      return false;
    }
    if( stringA.length != stringB.length){
      return false;
    }
    let temporaryBuffer = stringB + stringB;
  
    return temporaryBuffer.includes(stringA)
    
  }

  return{
    isSubstring
  }
}

module.exports = rotation();