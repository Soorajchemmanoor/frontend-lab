let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

let groceryItems = shoppingList[4];

let firstGroceryItem = groceryItems[0];
console.log(firstGroceryItem);

groceryItems.push("Carrots");
console.log("After push:", groceryItems);


let removedItem = groceryItems.pop();
console.log("Removed item:", removedItem);
console.log("After pop:", groceryItems);


groceryItems.splice(1, 2, "Cucumbers", "Bell Peppers");

console.log("After splice:", groceryItems);


