class Node {
    constructor (val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size ++;
    }
}

var middleNode = function(head) {
    let current = head;
    let size = 0;
    while (current) {
        size ++;
        current = current.next;
    }
    let indMiddle = 0;
    if (size % 2 === 1) indMiddle = (size - 1) / 2;
    else indMiddle = size / 2;
    if (indMiddle === 0) return head;
    current = head;
    while (indMiddle > 1) {
        current = current.next;
        indMiddle --;
    }
    return  current.next;
};

let ll = new LinkedList()
ll.insertFirst(1)
ll.insertFirst(2)
ll.insertFirst(3)
ll.insertFirst(4)
ll.insertFirst(5)
ll.insertFirst(6)

console.log(middleNode(ll.head));
