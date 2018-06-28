'use strict'; 

const removeDups = () => {
    
    const performDuplicatesRemoval =  (head) => {
    let actualNode  = head;
    let buffer      = {};
    let previousNode;
    while(actualNode != null ){
        if(buffer[actualNode.data] == undefined){
            buffer[actualNode.data] = true;
            previousNode = actualNode;
        }else{
            
            previousNode.next = actualNode.next;
        }
        actualNode = actualNode.next;
    }
    return head;
  }

  const performDuplicatesRemovalNonBuffered = (head) => {
    let actualNode = head;
    while(actualNode != null){
        let runner = actualNode.next;
        while(runner != null){
            if(actualNode.data == runner.data){
                actualNode.next = runner.next;
            }else{
                actualNode = runner;
            }
            runner = runner.next;
        }
        actualNode = actualNode.next;
        return head;
    }
    return null;
  }

  return {
    performDuplicatesRemoval,
    performDuplicatesRemovalNonBuffered
  }
};

module.exports = removeDups();
let mock = {
        "data": "HP",
        "next": {
            "data": "HPE",
            "next": {
                "data": "IBM",
                "next": {
                    "data": "HP",
                    "next": {
                        "data": "Apple Computer Inc.",
                        "next": null
                    }
                }
            }
        }
    };
var app = removeDups();

app.performDuplicatesRemovalNonBuffered(mock)
 