var object = {
  name: "prabha",
  age: 24,
  specifications: {
    size: "180cm",
    weight: 75,
  },
  address: "hyd",
};

console.log(object);
console.log(object.name);

object.age++;
console.log(object.age);

object.quantities = [
  {
    name: "quality",
    value: 200,
  },
  "kindness",
  "anger",
];

console.log(object.quantities[0].name);

var myFunction = function () {
  console.log(object);
};

var calculateVTA = function (price) {
  console.log((price / 100) * 20);
};

calculateVTA(); // expecting value in parameter
calculateVTA(125);

if (object.hasOwnProperty("name")) {
  console.log("object has name as an existing property.");
  //return;
}

if (!object.hasOwnProperty("kfdkj")) {
  console.log("object doesn't has name as an existing property.");
  //return;
}

console.log(object.name.indexOf("Prabha"));
console.log(object.name.indexOf("prabha"));
