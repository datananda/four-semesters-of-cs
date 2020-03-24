/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.length++;
    }

    pop() {
        const tail = this.tail;
        const ptail = this._findByIndex(this.length - 2);
        ptail.next = null;
        this.tail = ptail;
        this.length--;

        return tail.value;
    }

    _findByIndex(index) {
        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        return current;
    }

    get(index) {
        return this._findByIndex(index).value;
    }

    delete(index) {
        let toDelete;

        if (index === 0) {
            toDelete = this.head;
            this.head = toDelete.next;
        } else {
            let oneBefore = this._findByIndex(index - 1);
            toDelete = oneBefore.next;
            oneBefore.next = toDelete.next;

            if (!oneBefore.next.next) {
                this.tail = oneBefore.next;
            }
        }

        this.length--;

        return toDelete.value;
    }
}


// // unit tests
// // do not modify the below code
// describe('LinkedList', function() {
//     const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
//     const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
//     let list;
    
//     beforeEach( () => {
//       list = new LinkedList();
//     })
    
//     it('constructor', () => {
//       expect(list).toEqual(jasmine.any(LinkedList));
//     });
    
//     it('push', () => {
//       abcRange(26).map( character => list.push(character) );
//       expect(list.length).toEqual(26);
//     });
    
//     it('pop', () => {
//       abcRange(13).map( character => list.push(character) );
//       expect(list.length).toEqual(13);
//       range(10).map( () => list.pop() );
//       expect(list.length).toEqual(3);
//       expect(list.pop()).toEqual('c');
//     });
    
//     it('get', () => {
//       list.push('first');
//       expect(list.get(0)).toEqual('first');
//       list.push('second');
//       expect(list.get(1)).toEqual('second');
//       expect(list.get(0)).toEqual('first');
//       abcRange(26).map( character => list.push(character));
//       expect(list.get(27)).toEqual('z');
//       expect(list.get(0)).toEqual('first');
//       expect(list.get(9)).toEqual('h');
//       list.pop();
//       expect(list.get(list.length-1)).toEqual('y');
//     });
    
//     it('delete', () => {
//       abcRange(26).map( character => list.push(character) );
//       list.delete(13);
//       expect(list.length).toEqual(25);
//       expect(list.get(12)).toEqual('m');
//       expect(list.get(13)).toEqual('o');
//       list.delete(0);
//       expect(list.length).toEqual(24);
//       expect(list.get(0)).toEqual('b');
//     });
    
//   });