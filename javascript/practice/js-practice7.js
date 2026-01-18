const indDay1 = new Date(1947, 7,15);

console.log(indDay1);


const indDay2 = new Date(1947, 7,15).toString();
console.log(indDay2);

// let opt = confirm("Do you want see the indian indipendace day");

// if(opt)
// {
//     let name = prompt('Enter your name?');
//     alert(`hi ${name}! ${indDay2}`);
// }
// else
//     alert("Bie! thanks for the confirmatin");


const ob = {"name":"sooraj"};
const arr = ["a","b",5];
console.log(typeof null);
console.log(typeof arr );
console.log(typeof ob);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof "undefined");


let a = 5
let b = "5"

console.log(a == b)

a = 5
b = ["5"]

console.log(a == b)

a = "a"
b = ["a"]

console.log(a == b)

a = "v"
b = ["a","dc"]

console.log(a+b)


a = ["v"]
b = ["a","dc"]

console.log(a+b)


console.log([1,2] + 3);

console.log("10" - [2]);


console.log([1] + {});


console.log(true + [1,2]);


console.log(null + [5]);

console.log(10 + true);

console.log([] + []);


console.log([] + {});


console.log({} + []);



console.log(0 == []);

console.log("0" == []);

console.log(false == []);


console.log("5" * "2");

console.log([5] * 2);

console.log("5" - true);

console.log("5" + true);



// Remove duplicates from array

const nums = [1, 2, 2, 3, 3, 3, 4];

const unique = new Set(nums);

console.log(unique);          // Set {1,2,3,4}
console.log([...unique]);   // [1,2,3,4]