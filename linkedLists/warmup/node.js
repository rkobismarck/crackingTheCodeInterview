function LinkedList() {
    var listSize = 0;
    var headNode = null;

    var Node = function(data) {
        return {
          data : data,
          next : null
        }
    }

    function add(data) {
        var node = new Node(data);
        var currentNode;

        if (this.headNode == null) {
            this.headNode = node
        } else {
            currentNode = this.headNode;
            while (currentNode.next != null) {
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
        this.listSize++;
    }

    function insert(data, pos) {
        if (pos > -1 && pos < this.listSize) {
            var node = new Node(data);
            var currentNode = this.headNode;
            var previousNode;
            var index = 0;

            if (pos == 0) {
                node.next = currentNode;
                this.headNode = node;
            } else {
                while (index++ < pos) {
                    previousNode = currentNode;
                    currentNode = currentNode.next
                }
                node.next = currentNode
                previousNode.next = node;
            }
            this.listSize++;
            return true;
        }
        return false;
    }

    function remove(pos) {
        if (this.listSize >= pos && pos > -1) {
            var currentNode = this.headNode;
            var previousNode;
            var index;

            if (pos == 0) {
                this.headNode = currentNode.next;
            } else {
                while (index++ < pos) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next;
            }
            this.listSize--;
            return currentNode.data;
        }

        return null;
    }




    function size() {
        return this.listSize;
    }

    function hasElements() {
        return this.listSize > 0;
    }



    return {
        add,
        listSize,
        insert,
        headNode,
        size,
        hasElements
    }

}

var linkedList = LinkedList();
linkedList.add("A")
linkedList.add("C")
linkedList.add("D")
linkedList.add("F")
linkedList.insert("B", 1)
console.log(linkedList.size())
console.log(linkedList.hasElements())



console.log(linkedList)