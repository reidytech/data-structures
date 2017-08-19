var DoublyLinkedList = function(prev, next, data, head){
    this.prev = null;
    this.next = null;
    this.data = null;
    this.head = false;
    this.tail = false;

    this.setPrev = function(prev){
        this.prev = prev;
    }
    this.setNext = function(next){
        this.next = next;
    }

    this.setHead = function(head){
        this.head = head;
    }

    this.setTail = function(tail){
        this.tail = tail;
    }
    /*var getPrev = function(){
        return this.prev;
    }
    var getNext = function(){
        return this.next;
    }*/
    this.setData = function(data){
        this.data = data;
    }
}

var nodeOne = new DoublyLinkedList();
nodeOne.setData(5);
nodeOne.setHead(true);
var nodeTwo = new DoublyLinkedList();
nodeTwo.setData(51);
nodeOne.setNext(nodeTwo);
nodeTwo.setPrev(nodeOne);

var nodeThree = new DoublyLinkedList();
nodeThree.setData(33);
nodeTwo.setNext(nodeThree);
nodeThree.setPrev(nodeTwo);

var nodeFour = new DoublyLinkedList();
nodeThree.setNext(nodeFour);
nodeFour.setData(91);
nodeFour.setNext(null);
nodeFour.setPrev(nodeThree);
nodeFour.setTail(true);

document.querySelector('#nodeOne').innerHTML = "Getting value through Node 2's previous access " + nodeTwo.prev.data;
document.querySelector('#nodeTwo').innerHTML = "Getting value through double preving node 4 " + nodeFour.prev.prev.data;
document.querySelector('#nodeThree').innerHTML = "Getting value through double nexting from node 1 " + nodeOne.next.next.data;
document.querySelector('#nodeFour').innerHTML = "Getting value through triple nexting from one " + nodeOne.next.next.next.data;
document.querySelector('#isHead').innerHTML = `Node one ${nodeOne.head ? ' is ': ' is not '} the head.`;
document.querySelector('#isTail').innerHTML = `Node three ${nodeThree.tail ? ' is ' : ' is not '} the tail, and Node 4 ${nodeFour.tail ? ' is ' : ' is not '} the tail.`