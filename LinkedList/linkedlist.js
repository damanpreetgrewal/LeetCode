class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }
  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.head) {
      this.tail = newNode;
    }
  }
  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }
  //Get the first Occurence of a value
  find(value) {
    if (!this.head) {
      return null;
    }
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }
    return null;
  }
  delete(value) {
    if (!this.head) {
      return;
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  toArray() {
    const elements = [];

    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("Daman");
linkedList1.append(true);
linkedList1.prepend(false);
linkedList1.append("hello");

console.log(linkedList1.toArray());

linkedList1.delete("hello");

console.log(linkedList1.toArray());
console.log(linkedList1.tail);

console.log(linkedList1.find("Max"));
console.log(linkedList1.find("Daman"));

linkedList1.insertAfter('Max','Daman');

console.log(linkedList1.toArray());


