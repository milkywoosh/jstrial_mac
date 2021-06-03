

/*
*
*   Pastikan paham perbedaan "linkedListDefGuide.js" dan 
*   "linkedListDefGuideModified.js" : difference about the usage of "this" keyword
*
*
*/

function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function remove(item) { // head, 1, 2
    var prevNode = this.findPrevious(item);// 1 -> head
    if (!(prevNode.next == null)) {
        console.log('prevNode.next.next: ', prevNode.next.next);
        prevNode.next = prevNode.next.next;
    }
}

function findPrevious(item) {// 2
    var currNode = this.head;
    // console.log('currNode.element: ', currNode.element);
    // console.log('currNode.next.element: ', currNode.next.element != item);
    while ((currNode.next != null) && (currNode.next.element != item)) {
        // console.log('while currNode.next: ', currNode.next);
        currNode = currNode.next;
    }
    console.log('currNode.element: ', currNode.element);
    return currNode;
}

function display() {
    var currNode = this.head;
    console.log('head: ', this.head.element);
    while ((currNode.next != null)) {
     
        
        console.log('element: ', currNode.element);
        console.log('next: ', currNode.next); 
        currNode = currNode.next; 
    }

    return currNode;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    // newNode.next = current.next; // FOR WHAT???? have inspected, and useless !!
    current.next = newNode; // Node {element: 1, 
                            //       next: Node {element: 2, 
                            //                   next: null 
                            //                   }     
                            //       }
}



var number = new LList();
// number.insert(newNode, prevNode);
number.insert(1, 'head');
number.insert(2, 1);
number.insert(3, 2);
number.insert(4, 3);
number.remove(2);
// console.log('findPrevious: :', number.findPrevious(2));
// console.log('find head: ', number.find('head'));
// number.remove(2);
// number.remove(3)
console.log(number.display());

/*
Node {
    element: 'head',
    next: Node { 
              element: 1, 
              next: Node { 
                        element: 2, 
                        next: Node { 
                                  element: 3, 
                                  next: Node { 
                                            element: 4, 
                                            next: null 
                                            } 
                                    } 
                        } 
                } 
    }
*/




