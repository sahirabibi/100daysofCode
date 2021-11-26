// ordered list of array
// each item is mapped with an index
// linked list do not have any index 
// node stores a piece of data and points to next of data
// keep track of head 
// keep track of length 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var first = new Node('1');
first.next = new Node('2');
first.next.next = new Node('3');

class List{
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null
    }

    push(val) {
        // create a new node to the list
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            
        } else {
            this.tail.next = newNode;
			this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }

    traverse() {
        let curr = this.head;
        while (curr) {
            console.log(current.val);
            current = current.next;
        }
    }
    pop() {
        // is no items, return null
        // if only one item, return head
        // return tail
        // traverse the list until you reach an item whos next is this.tail
        // return the tail and set that items next to null
        if (!this.head) {
            return undefined;
        }
        else if (this.length < 2) {
            return this.tail
        } else {
            let node = this.head;
            let newTail = this.head;
            while (node.next) {
                newTail = node;
                node = node.next;
            }
            this.tail = newTail
            newTail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return node;
        }
    }

    shift() {
        if (!this.head) {
            return null;
        }
        else if (this.length < 1) {
            node = this.head;
            this.head = null;
            this.tail = null;
            return node;
        } else {
            node = this.head;
            newHead = node.next;
            node.next = null;
            this.head = newHead;
            this.length--;
            return node;
        }
    }

    unshift(val) {
        let node = new Node(val)
        if(!this.head) {
            this.head = node;
            this.tail = node;
           
        } else {
            let old = this.head
            this.head = node;
            node.next = old;
   
        }
        this.length++;
        return this;
    }
    
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let counter = 0;
        let node = this.head;
        while (counter !== idx) {
            node = node.next;
            counter++;
        }
        return node;
    }

    set(idx, val) {
        let newNode = new Node(val);
        let target = this.get(idx);
        if (target) {
            target = newNode;
            return true;
        }
        return false;
    }


    insert(idx, val) {
        let node = new Node(val)
        if (idx < 0 || idx > this.length ) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);
        else {
            let prev = this.get(idx - 1);
            let curr = prev.next;
            prev.next = node;
            node.next = curr;
            return true;
        }
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return false;
        if (idx === 0) return !!this.shift();
        if (idx === this.length - 1) return !!this.pop();
        else {
            let prev = this.get(idx - 1);
            let target = prev.next;
            let nextNode = prev.next.next;
            prev.next = nextNode;
            target.next = null;
            this.length--;
            return target;
        }

    }

    reverse() {
        let head = this.head;
        let tail = this.tail;
        this.head = tail;
        this.tail = head; 

        let next;
        let prev = null;
        let node = this.head;

        while(node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

// O(N)
// Insertion -> O(1);
// Removal -> O(N);
// Search -> O(N);
// Access -> O(N); 

let list = new List()