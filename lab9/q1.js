function LinkedList() {
    this.head = null;

    this.add = function (value) {
        const newNode = { value, next: null };

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    };

    this.remove = function (value) {
        if (!this.head) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }

        if (!current) {
            return; // Value not found
        }

        prev.next = current.next;
    };

    this.print = function () {
        let current = this.head;
        let result = 'LinkedList{';

        while (current) {
            result += current.value;
            if (current.next) {
                result += ',';
            }
            current = current.next;
        }

        result += '}';
        console.log(result);
    };
}

// Example usage:
const linkedlist = new LinkedList();

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);

linkedlist.print(); // Expected Result:  LinkedList{1,2,3}

linkedlist.remove(2);
linkedlist.print(); // Expected Result:  LinkedList{1,3}