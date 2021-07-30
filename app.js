var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// Remove the last item from the vegetable array.
// Remove the first item from the fruit array.
// Find the index of "orange."
// Add that number to the end of the fruit array.
// Use the length property to find the length of the vegetable array.
// Add that number to the end of the vegetable array.
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
// Remove 2 elements from your new array starting at index 4 with one method.
// Reverse your array.
// Turn the array into a string and return it.

vegetables.pop();
fruit.shift();
fruit.push(fruit.indexOf("orange"));
vegetables.push(vegetables.length);
var food = fruit.concat(vegetables);

food.splice(4,2);
food = food.reverse();
food = food.toString();

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food:  "+ food);
