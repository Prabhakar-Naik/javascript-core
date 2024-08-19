console.log("Hi prabha");
// alert("Hello");
var myVar = "prabha";
console.log(myVar);

myVar = "12";
console.log(myVar);

myVar = 12;
console.log(myVar);

myVar = ["hello", "bye", 2024, "coming", 2025];
console.log(myVar);

myVar = {};
console.log(myVar);

myVar = {
  name: "veera",
  age: 30,
  qualities: ["cigarate", "coding"],
  description: {
    size: "180cm",
    weight: 60,
  },
};

console.log(myVar);

myVar = true;
console.log(myVar);

myVar = false;
console.log(myVar);

myVar = 1;
console.log(myVar);

console.log(window.document.body);

function newElement() {
  var newParagraph = window.document.createElement("p");
  var text = window.document.createTextNode("Hello This is P tag");
  newParagraph.appendChild(text);
  document.body.appendChild(newParagraph);
}


