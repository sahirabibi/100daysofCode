// stacks 
// define the stack: data collections
// LIFO 
// Use arr for stack
// use linked list for a stack

// array implementation 

class Node {
    constructor(val) {
        this.value = val;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}