
/*
*
*   Pastikan paham perbedaan "linkedListBeauTrial.js" dan 
*   "linkedListBeau.js" : difference about the usage of "this" keyword
*
*  in "linkedListBeauTrial.js"  i have successfully convert COMPACT class function
*  to be SEPARATED class function from "linkedListBeau.js" see the difference
*/

function Node(element) {
    this.element = element;
    this.next = null;
}


function LinkedList() {
    this.head = null; 
    this.length = 0;
    /*
    *  REMEMBER THE USAGE OF "this" keyword
    *  if you store "this.head" or "this.length" in LinkedList() class
    *  so you must use "this.head" in another function because all of those
    *  "this." object adalah 1 kesatuan!!
    */
    this.size = size;
    this.add = add;
    this.elementAt = elementAt;
    this.remove = remove;
}
    
function size() {
    return this.length;
}

  

function add(element) {
    
    let node = new Node(element);
    if (this.head === null) {
        this.head = node;
    } else {
        currentNode = this.head; // perhatikan the usage of "this.head"

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }

    this.length++;
}

function elementAt(index) {
    let currentNode = this.head; // perhatikan the usage of "this.head"
    let count = 0;
    
    while (count < index) {
        count++;
        currentNode = currentNode.next;
    }
    
    return currentNode.element;
    
}

function remove(element) {
    let currentNode = this.head; // 2, next: 3  ** // perhatikan the usage of "this.head"
    let previousNode; // 1
    
    if (currentNode.element === element) {
        
        this.head = currentNode.next; // perhatikan the usage of "this.head"
    } else {
        console.log('currNod: ', currentNode);
        while (currentNode.element !== element) {
            previousNode = currentNode;
            console.log('\n');
            console.log('previousNode: ', previousNode);
            console.log('\n');
            currentNode = currentNode.next; // all c
            console.log('currentNode: ', currentNode);
            // console.log('\n');
            // console.log('currentNode.next: ', currentNode.next);
            // console.log('\n');
            
        }
        // console.log('previousNode.next before: ', previousNode.next);
        // console.log('\n');
        // console.log('currentNode.next before: ', currentNode.next);
        // console.log('\n');
        previousNode.next = currentNode.next; // 3, next: null  ???????
        console.log('previousNode.next after: ', previousNode.next);
        // console.log('\n');
        // console.log('currentNode.next after: ', currentNode.next);
        // console.log('\n');
        
    }
    this.length--; // perhatikan the usage of "this.length"
    // return [currentNode.element, currentNode.next.element, currentNode.next.next.element];
}




let conga = new LinkedList();
conga.add('one');
conga.add('two');
conga.add('three');
conga.add('four');
console.log(conga.elementAt(0));
console.log(conga.elementAt(1));
console.log(conga.elementAt(2));
console.log(conga.elementAt(3));



