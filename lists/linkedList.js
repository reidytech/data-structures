/* My implementation of their implementation */

function Node(data){
    this.data = data;
    this.next = null;
}

function LinkedList(data, tailData) {
    this.head = new Node(data);
    this.tail = new Node(tailData || null);
    this.find = find;
    this.insert = insert;
    this.display = display;
}
    
function find(item){
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newData){
    var newNode = new Node(newData);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
   
function display() {
    var currNode = this.head;
    while(!(currNode.next == null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;

/* Node, element of linked list */
/*Implementation in Javascript data structures and algorithms */
/*
function Node(element){
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
}
    
function find(item){
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
   
function display() {
    var currNode = this.head;
    while(!(currNode.next == null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
*/


/* 
    -----Original Code--------
    var linkedListObj = {
    next: next,
    data: data,
    setNext: setNext,
    setValue: setValue
} */

/* var LinkedList = function(next, data){
    this.next = next;
    this.data = data;
    this.setNext = function(next){
        this.next = next;
    };
    this.setValue = function(data){
        this.data = data;
    }
}

var nodeOne = new LinkedList(null, 7);
var nodeTwo = new LinkedList(null, 20);
document.querySelector('#nodeOne').innerHTML = nodeOne.data;
nodeOne.setNext(nodeTwo);
document.querySelector('#nodeTwo').innerHTML = nodeOne.next.data */

