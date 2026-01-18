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


// Example 2: Add / Delete / Check

const set = new Set();

set.add(10);
set.add(20);
set.add(10);   // duplicate ignored

console.log(set);        // Set {10,20}

console.log(set.has(20)); // true

set.delete(10);
console.log(set);        // Set {20}


// Example 3: Find first repeating element
function firstRepeat(arr) {
  const seen = new Set();

  for (const n of arr) {
    if (seen.has(n)) return n;
    seen.add(n);
  }
}

console.log(firstRepeat([5,1,2,3,2,4])); // 2


// Example 4: Set operations (union)
const a = new Set([1,2,3]);
const b = new Set([3,4,5]);

const union = new Set([...a, ...b]);
console.log(union); // {1,2,3,4,5}




// 2. MAP – Key → Value (better than objects)
// ✅ Example 1: Basic Map
const map = new Map();

map.set("name", "Sooraj");
map.set("age", 25);

console.log(map.get("name")); // Sooraj
console.log(map.has("age"));  // true


// Example 2: Any type as key
const m = new Map();

m.set(1, "number key");
m.set(true, "boolean key");
m.set({id:1}, "object key");

console.log(m);


// Example 3: Count frequency (BEST USE)
function countFreq(arr) {
  const freq = new Map();

  for (const n of arr) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  return freq;
}

console.log(countFreq([1,2,2,3,1]));
// Map {1 => 2, 2 => 2, 3 => 1}


// Example 4: Loop Map
for (const [key, value] of map) {
  console.log(key, value);
}





// Combined Example of SET And MAP

const users = ["a","b","a","c","b"];

const uniqueUsers = new Set(users);

const freq = new Map();

for (const u of users) {
  freq.set(u, (freq.get(u) || 0) + 1);
}

console.log(uniqueUsers); // Set {a,b,c}
console.log(freq);        // Map {a=>2, b=>2, c=>1}