/* var linkedListObj = {
    next: next,
    data: data,
    setNext: setNext,
    setValue: setValue
} */

var LinkedList = function(next, data){
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
document.querySelector('#nodeTwo').innerHTML = nodeOne.next.data