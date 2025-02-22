
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map(): 
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);

// filter(): 
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// reduce():
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

// forEach(): 
console.log("Numbers in the array:");
numbers.forEach(num => console.log(num));

// find(): 
const firstGreaterThanFive = numbers.find(num => num > 5);
console.log("First Number Greater Than 5:", firstGreaterThanFive);

// some(): 
const hasGreaterThanTen = numbers.some(num => num > 10);
console.log("Has Number Greater Than 10:", hasGreaterThanTen);

// every():
const allPositive = numbers.every(num => num > 0);
console.log("Are All Numbers Positive?:", allPositive);

// sort(): 
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbers);

// slice(): 
const firstFiveNumbers = numbers.slice(0, 5);
console.log("First Five Numbers:", firstFiveNumbers);

// splice():
const removedNumbers = numbers.splice(-2, 2);
console.log("Removed Numbers:", removedNumbers);
console.log("Remaining Numbers:", numbers);
