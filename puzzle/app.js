//coding puzzles 












//1
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]














//2
// Define the person object
const person = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
};

// Function to process an array of person objects
function processPersons(persons) {
    // Iterate over each person object in the array
    persons.forEach(person => {
        // Print information about each person
        console.log(`Name: ${person.name}, Age: ${person.age}, Email: ${person.email}`);
    });
}

// Example array of person objects
const personsArray = [
    {
        name: 'Alice',
        age: 25,
        email: 'alice@example.com'
    },
    {
        name: 'Bob',
        age: 35,
        email: 'bob@example.com'
    },
    person // Adding the previously defined person object to the array
];




























//3
function filterPersonsOver30(persons) {
    return persons.filter(person => person.age > 30);
}

// Example array of person objects
const personsArray = [
    {
        name: 'Alice',
        age: 25,
        email: 'alice@example.com'
    },
    {
        name: 'Bob',
        age: 35,
        email: 'bob@example.com'
    },
    {
        name: 'Charlie',
        age: 28,
        email: 'charlie@example.com'
    },
    {
        name: 'David',
        age: 40,
        email: 'david@example.com'
    }
];

// Call the function to filter persons over 30
const personsOver30 = filterPersonsOver30(personsArray);
console.log(personsOver30);

























//4
class Stack {
    constructor() {
        this.items = [];
    }

    // Push element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Return the top element of the stack without removing it
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print the elements of the stack
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10,20,30
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
stack.clear();
console.log(stack.isEmpty()); // Output: true




























//5

class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the back of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Return the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the queue
    size() {
        return this.items.length;
    }

    // Print the elements of the queue
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10,20,30
console.log(queue.dequeue()); // Output: 10
console.log(queue.front()); // Output: 20
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false






























//6

function removeVowels(inputString) {
    return inputString.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const input = "Hello World";
const result = removeVowels(input);
console.log(result); // Output: Hll Wrld
























//7

function uniqueElements(arr1, arr2) {
    // Concatenate both arrays
    const combinedArray = arr1.concat(arr2);
    
    // Create a Set from the combined array to remove duplicates
    const uniqueSet = new Set(combinedArray);
    
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
    
    return uniqueArray;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = uniqueElements(array1, array2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]