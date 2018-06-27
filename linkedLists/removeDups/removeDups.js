'use strict'; 

const removeDups = () => {
    const performDuplicatesRemoval =  (head) => {
      let hashSet       = {};
      let actualNode    = head;
      let previousNode  = null;
      while(actualNode != null){
         let key = actualNode.data;
         if(hashSet[key] == undefined){
            hashSet[key] = true;
            previousNode = actualNode;
         }else{
            previousNode.next = actualNode.next;  
            previousNode = actualNode.next; 
        }
        actualNode = actualNode.next;
      }
      return head;
  }

  return {
    performDuplicatesRemoval
  }
};

module.exports = removeDups();

