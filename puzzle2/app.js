//puzzles : 

//1
function averageOfEvenNumbers(numbers) {
    // Filter out the even numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    // Check if there are even numbers in the array
    if (evenNumbers.length === 0) {
        return "No even numbers found.";
    }
    
    // Calculate the sum of even numbers using reduce
    const sum = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    // Calculate the average
    const average = sum / evenNumbers.length;
    
    return average;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = averageOfEvenNumbers(numbers);
console.log(result); // Output: 6 (Average of even numbers 2, 4, 6, 8, 10)
















//2
function findLongestWord(words) {
    if (words.length === 0) {
        return null; // Return null if the array is empty
    }

    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

// Example usage:
const wordsArray = ["apple", "banana", "orange", "strawberry"];
const longestWord = findLongestWord(wordsArray);
console.log("Longest word:", longestWord); // Output: "strawberry"






















//3

function averagePages(books) {
    if (books.length === 0) {
        return 0; // Return 0 if the array is empty to avoid division by zero
    }

    const totalPages = books.map(book => book.pages).reduce((acc, curr) => acc + curr, 0);
    return totalPages / books.length;
}

// Example usage:
const booksArray = [
    { title: "Book 1", author: "Author 1", pages: 200 },
    { title: "Book 2", author: "Author 2", pages: 250 },
    { title: "Book 3", author: "Author 3", pages: 300 }
];

const avgPages = averagePages(booksArray);
console.log("Average number of pages:", avgPages); // Output: 250


























//4

function countFrequency(strings) {
    return strings.reduce((frequency, word) => {
        frequency[word] = (frequency[word] || 0) + 1;
        return frequency;
    }, {});
}

// Example usage:
const inputArray = ["hello", "world", "hello"];
const frequencyObject = countFrequency(inputArray);
console.log(frequencyObject); // Output: { hello: 2, world: 1 }


























//5
function countPeopleByCity(people) {
    return people.reduce((countByCity, person) => {
        const city = person.city;
        countByCity[city] = (countByCity[city] || 0) + 1;
        return countByCity;
    }, {});
}

// Example usage:
const peopleArray = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
];

const countByCity = countPeopleByCity(peopleArray);
console.log(countByCity); // Output: { "New York": 2, "Chicago": 1 }