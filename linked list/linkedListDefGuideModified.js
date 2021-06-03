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

    let head = new Node('head');
    // this.find = find;
    // this.insert = insert;
    // this.display = display;
    // this.findPrevious = findPrevious;
    // this.remove = remove;

    this.remove = function (item) {
        var prevNode = this.findPrevious(item);
        if ((prevNode.next != null)) {
            prevNode.next = prevNode.next.next;
        }
    }
    
    this.findPrevious = function (item) {
        var currNode = head;
        while (!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    
    this.display = function () {
        var currNode = head;
        var arr = [];
        while ((currNode.next != null)) {
         
            console.log('head: ', currNode.element);
            console.log('next: ', currNode.next.element); 
            currNode = currNode.next; 
        }
    
        return currNode;
    }
    
    this.find = function (item) {
        var currNode = head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    
    this.insert = function (newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

}





var number = new LList();
// number.insert(newNode, prevNode);
number.insert(1, 'head');
number.insert(2, 1);
number.insert(3, 2);
number.insert(4, 3);
number.remove(2);
number.remove(3)
console.log(number.display());

