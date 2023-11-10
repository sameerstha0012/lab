function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }
  
  function LinkedList() {
    this.head = null;
  }
  
  LinkedList.prototype.add = function (data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  };
  
  LinkedList.prototype.remove = function (data) {
    if (this.head == null) {
      console.log("List is empty");
      return;
    }
    if (this.head.data == data) {
      this.head = this.head.next;
      return;
    }
  
    let current = this.head;
    let prev = null;
  
    while (current && current.data != data) {
      prev = current;
      current = current.next;
    }
    if (!current) {
      console.log("Provided node is not available");
      return;
    }
    prev.next = current.next;
  };
  
  LinkedList.prototype.print = function () {
    let current = this.head;
    const elements = [];
  
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
  
    console.log(`LinkedList{${elements.join(",")}}`);
  };
  
  let linkedList = new LinkedList();
  linkedList.add(45);
  linkedList.add(54);
  linkedList.add(88);
  linkedList.add(23);
  linkedList.add(99);
  linkedList.add(23);
  linkedList.add(56);
  linkedList.print();
  linkedList.remove(88);
  linkedList.remove(8);
  linkedList.print();