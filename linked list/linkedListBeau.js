

/*
*
*   Pastikan paham perbedaan "linkedListBeauTrial.js" dan 
*   "linkedListBeau.js" : difference about the usage of "this" keyword
*
*  see another style code in "linkedListBeauTrial.js"  which
*  SEPARATE ALL THOSE united function into separated function with 
*  using the technique of "this." keyword
*/

function LinkedList() {
    let length = 0;
    let head = null;
 
    
    let Node = function(element) {
        this.element = element;
        this.next = null;
    }

    this.size = function() {
        return length;
    }


    // tracing each element
    this.head = function() {
        let currentNode = head;
        return [ // note:  "currentNode" is equal to "head"
                 // because it store the same new Node(element)
                currentNode.element == head.element, 
                head.next.element
               ];
               // result: [ 'one', 'two', 'three' ];
    }

    this.add = function(element) { // 'one', 'two', 'three'
        let node = new Node(element);
        if (head === null) {
            head = node;
            // 'one'
        } else {
            let currentNode = head;
            // value: 1  ---> currentNode = 'one';
            // value: 2  ---> currentNode.next = 'two';
            // value: 3  --->
            while(currentNode.next) { // jika currentNode.next TERDAPAT NILAI maka 
                                      // set currentNode = currentNode.next
                                      // jika currentNode.next NULL maka loncat ke
                                      // line currentNode.next = node;

                currentNode = currentNode.next; // currentNode.next akan di-isi node
                // currentNode = 'two';
            }

            //  currentNode.next  adalah false karena  'one' sbg value pertama, blm ada .next
            //  jadi currentNode.next = 'two' atau currentNode.next = node || (New Node(element));
            currentNode.next = node;
            
        }

        length++;
    }

    this.elementAt = function(index) {
        let currentNode = head;
        let count = 0;
        

        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }

        if (currentNode) {
            return currentNode;
        }
        
        return -1; 
    }


    this.remove = function(element) {
        let currentNode = head; // 2, next: 3
        let previousNode; // 1
        
        if (currentNode.element === element) {
            
            head = currentNode.next;
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
        length--;
        // return [currentNode.element, currentNode.next.element, currentNode.next.next.element];
    }
    

    

}

let conga = new LinkedList();

conga.add('one');
conga.add('two');
conga.add('three');
conga.add('four');


console.log('elementAt 0: ', conga.elementAt(0));
console.log(conga.remove('two'));
// conga.remove('four');
console.log('elementAt 0: ', conga.elementAt(0));
console.log('elementAt 1: ', conga.elementAt(1));
console.log('elementAt 2: ', conga.elementAt(2));

// console.log(conga.size());
// console.log(conga.head());

