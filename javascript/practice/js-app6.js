let arr = [1,2,3,4,5]
arr.shift();
console.log(arr);
arr.unshift(-1,0);
console.log(arr);
let newArr = arr.slice(1,4)
console.log(newArr);

// shift removes the value from starting of the array
// unshift adds the value at the starting of the array


//concat
let a = [1,2,3]
let b = [4,5,6]
let c = a.concat(b)
console.log(c)

// destructure
let arr2 = [1,2,3,4];
[a,b, , d] = arr2;
console.log(a,b, d)

let obj = {name: 'yash', email: 'yash@gmail.com', age: 24}
let {age, email} = obj;
console.log(age, email)



// spread operators

 arr = [1,2,3,4,5,6,7,8];
 [a,b,c, ...d] = arr;
console.log(a,b,c, d)




a = [1,2,3,4,5,6];
b = [7,8,9]
c = [...a, ...b]

console.log(c);



a = {name: 'yash', age: 24}
b = {email: 'yash@gmail.com', gender: 'Male', age: 30}
user = {...a, ...b}
console.log(user)


// reference data types => [] {} ()
a = [1,2,3,4,5];
b = [...a];
b.shift();

console.log(a,b);


// shallow copy => it looks like the value is copied but actually its not

user = {
    name: 'yash',
    email: 'yash@gmail.com',
    address: {
        city: 'allahabad',
        pin: 211001
    }
};

let newUser = JSON.parse(JSON.stringify(user));
console.log(newUser);

newUser = {...user};
newUser.address.city = 'delhi';
console.log(user.address.city, newUser.address.city);


arr = [1,2,3,4,5];
let sqrs = arr.map(a=>a*a);
console.log(sqrs);
arr.splice(2,1, 11);
console.log(arr);


newArr = arr.toSpliced(1,1, 50);
console.log(newArr);



arr = [1,2,3,4,6,7,9,1,5,6];

let one = arr.find(n=>n==1);
console.log(one);

// includes
console.log(arr.includes(12));
