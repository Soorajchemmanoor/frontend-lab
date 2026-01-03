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


// Conditionals statements 

// Task 1
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(5));

// Task 2
function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(88));

// Task 3
function checkTruthy(str) {
    if (str) {
        return "Truthy";
    } else {
        return "Falsy";
    }
}

console.log(checkTruthy("JavaScript"));
console.log(checkTruthy(""));
