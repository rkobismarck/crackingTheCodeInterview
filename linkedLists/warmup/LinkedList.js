const LinkedList = () => {
    let size = 0;
    let head = null;

    const Node = (data) => {
        return {
            data: data,
            next: null
        }
    }

    const Add = (data) => {
        let node = Node(data);
        if (head == null) {
            head = node
        } else {
            let currentNode = head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        size++;
    }

    const Find = (data) => {
        let currentNode = head;
        while (currentNode != null) {
            if (currentNode.data == data) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null;
    }

    const FindRecursive = (key,node) => {
      if(!node){
        node = head
      }
      if(node.data == key ){
        return node
      }else{
        return FindRecursive(key,node.next)
      }
    }

    const IndexOf = (data) => {
        let currentNode = head;
        let index = 0;
        while (currentNode != null) {
            index++;
            if (currentNode.data == data) {
                return index
            }
            currentNode = currentNode.next
        }
        return -1;
    }

    const Insert = (position, data) => {
        let currentNode = head;
        let previousNode = null;
        let index = 0;

        if (size >= position && position > -1) {
            let node = Node(data);
            if (position == 0) {
                node.next = currentNode;
                head = node;
            } else {
                while (index++ < position) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                node.next = currentNode;
                previousNode.next = node;
            }
            size++;
            return true;
        }
        return false;
    }

    // Buffered version.
    const RemoveDuplicates = () => {
        let hashMap = {};
        let currentNode = head;
        let previousNode;
        while (currentNode != null) {
            if (hashMap[currentNode.data] == undefined) {
                hashMap[currentNode.data] = true;
            } else {
                previousNode.next = currentNode.next;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    // Non Buffered version.
    const RemoveDuplicatesNonBuffered = (head) =>{
      let currentNode = head;
      while(currentNode != null){
        let runner = currentNode.next;
        while (runner != null){
          if(currentNode.data == runner.data){
            currentNode.next = runner.next
          }
          runner = runner.next
        }
        currentNode = currentNode.next;
      }
    };



    const Size = () => size;

    const HasElements = () => size > 0;

    const ToString = () => JSON.stringify(head)

    return {
        Add,
        Size,
        HasElements,
        Find,
        FindRecursive,
        IndexOf,
        Insert,
        RemoveDuplicates,
        RemoveDuplicatesNonBuffered,
        ToString
    }
}

const app = LinkedList();
app.Add("HPE")
app.Add("HPE")
app.Add("HPE")
app.Add("HPE")
app.Add("IBM")
app.Add("HP")
app.Add("Yahoo")
//app.Insert(2, "SPOTIFY")
//app.Add("IBM")
//console.log(app.ToString())
//app.RemoveDuplicates()
//console.log(app.ToString())
app.RemoveDuplicatesNonBuffered()
//console.log(app.ToString())
console.log(app.FindRecursive("IBM"))
