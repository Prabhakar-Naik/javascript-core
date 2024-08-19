var names = ["prabhakar", "veera", "suresh", "suri"];

// includes
console.log(names.includes("veera"));

// destructuring objects
let prabhakar = {
  firstName: "prabhakar",
  age: 34,
};

let { firstName, age } = prabhakar;

console.log(firstName);
console.log(age);

// Object values key entries

console.log(Object.keys(prabhakar));
console.log(Object.values(prabhakar));

// using for of loop
for (var [key, value] of Object.entries(prabhakar)) {
  console.log(key, ": ", value);
}

// spread operator
let group1 = ["qqqq", "dddd", "aaaa", "bbbb"];

let group2 = ["prabha"];

let newGroup = [...group1, ...group2];
console.log(newGroup);

group1 = {
  prabhakar: {
    firstName: "prabhakar",
    age: 34,
  },
};

group2 = {
  sudhakar: {
    firstName: "sudhakar",
    age: 34,
  },
};

newGroup = { ...group1, ...group2 };

console.log(newGroup);

// async and await

let myFunction = async () => {
  await anotherFun(); // another function
};

anotherFun = () => {
  console.log("this is await function");
};

// template Strings

let myName = "prashanth kumar";

console.log(`My name is ${myName}`)