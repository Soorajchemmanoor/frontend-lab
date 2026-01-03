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






let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};


console.log("Student Name:", student.name);


student.phone = "123-456-7890";
console.log("After adding phone:", student);


delete student.grade;
console.log("After removing grade:", student);


student.age = 21;
console.log("After modifying age:", student);





